import React from 'react';
import Result from './Result/Result';

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
    
    let results = null
    results = data
        .filter(post=>{
            const {contentMatch, titleMatch, descriptionMatch} = similarityObj(post);
            return (contentMatch||descriptionMatch || titleMatch) ? post : null;
        })
        .map(post=>{
            const {contentMatch, titleMatch, descriptionMatch} = similarityObj(post);
            const match = {
                contentMatch, 
                titleMatch, 
                descriptionMatch
            };
            return {...post, match};
        })
        .map(post=>{
            for(const key in post.match){
                if(post.match[key]){
                    const type = key.split('Match')[0];
                    const valueOfKey = post[type];
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
    // },[searching, data, checkSimilarity, similarityObj]);
    console.log(results);
    const testingResult = results.map(x=><Result post={x}/>);
    console.log(testingResult);
    return (
        <div>{console.log(results)}</div>
    )
}

export default SearchResults;