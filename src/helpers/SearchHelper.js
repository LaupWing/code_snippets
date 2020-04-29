import React, {useCallback} from 'react';

function SearchResults({data, search}){
    const splitBySpaces = string => string
        .split(' ')
        .filter(x=>x!=='');
    
    const searching = splitBySpaces(search);
    
    const checkSimilarity = useCallback(formatted=>{
        return searching.every(s=>formatted.find(c=>{
            return c.toLowerCase().includes(s.toLowerCase())
        }));
    },[searching]);

    const similarityObj = useCallback(({content, title, description})=>({
        contentMatch : checkSimilarity(splitBySpaces(content)),
        titleMatch : checkSimilarity(splitBySpaces(title)),
        descriptionMatch : checkSimilarity(splitBySpaces(description))
    }),[checkSimilarity]);
    
    // Testing phace
    React.useEffect(()=>{
        const test = data
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
        console.log(test);
    },[searching, data, checkSimilarity, similarityObj]);
    
    return (
        <div></div>
    )
}

export default SearchResults;