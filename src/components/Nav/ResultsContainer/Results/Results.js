import React from 'react';
import Result from './Result/Result';
// import styles from './Results.module.css'; 

function SearchResults({data, search}){
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
    })
    console.log(data, search);
    let results = null
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
                    const highlighted = splitBySpaces(valueOfKey)
                        .map(c=>{
                            const simalarWord = searching.find(x=>c.includes(x))
                            if(simalarWord){
                                const highlightedLetters = c.split('')
                                    .map(q=>
                                        simalarWord.includes(q) ? 
                                        <span>{q}</span> : 
                                        q);
                                
                                return highlightedLetters;
                            }
                            return c;
                        });
                    post.match[key] =  <p>{highlighted}</p>;
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