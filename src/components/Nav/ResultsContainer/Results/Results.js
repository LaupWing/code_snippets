import React from 'react';
import Result from './Result/Result';
// import styles from './Results.module.css'; 

function SearchResults(props){
    const {data, search} = props;
    const splitBySpaces = string => string
        .split(' ')
        .filter(x=>x!=='');
    
    const searching = splitBySpaces(search);
    
    const checkSimilarity = formatted=>{
        return searching.every(s=>formatted.find(c=>{
            return c.toLowerCase().includes(s.toLowerCase())
        }));
    };

    const similarityObj = ({content, title, description})=>({
        contentMatch : checkSimilarity(splitBySpaces(content)),
        titleMatch : checkSimilarity(splitBySpaces(title)),
        descriptionMatch : checkSimilarity(splitBySpaces(description))
    });

    let results = null;
    
    results = data
        .filter(post=>{
            const {contentMatch, titleMatch, descriptionMatch} = similarityObj(post);
            return (contentMatch||descriptionMatch || titleMatch) ? post : null;
        })
        .map(post=>{
            const {contentMatch, titleMatch, descriptionMatch} = similarityObj(post);
            const match = {
                 content:contentMatch, 
                 title:titleMatch, 
                 description:descriptionMatch
            };
            return {...post, match};
        })
        .map(post=>{
            for(const key in post.match){
                if(post.match[key]){
                    const valueOfKey = post[key];
                    let start = null;
                    let end = null;
                    const highlighted = splitBySpaces(valueOfKey)
                        .map(c=>{
                            const simalarWord = searching.find(x=>c.toLowerCase().includes(x.toLowerCase()));
                            if(simalarWord){
                                const highlightedLetters = c.split('')
                                    .map((q,i)=>{
                                        if(q.toLowerCase()===simalarWord[0].toLowerCase()){
                                            const isItThisWord = c.substring(i, (simalarWord.length+i)).toLowerCase();
                                            const currentSearching = simalarWord.toLowerCase();
                                            if(isItThisWord === currentSearching){
                                                start = i;
                                                end = simalarWord.length+i;
                                            }
                                        }
                                        if(i >= start && i < end){
                                            return <span key={i}>{q}</span>
                                        }
                                        return q
                                    });
                                
                                return highlightedLetters;
                            }
                            return c;
                        })
                        .map(s=>{
                            if(typeof s === 'string'){
                                return s+' ';
                            }else{
                                return [...s, ' '];
                            }
                        });
                    post.match[key] =  <p key={post.id}>{highlighted}</p>;
                }
            }
            return post;
        });
    const resultsElements = results.map(x=><Result key={x.id} post={x}/>);
    return (
        <>{resultsElements}</>
    )
}


export default SearchResults;