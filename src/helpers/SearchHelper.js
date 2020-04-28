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
                        const highlight = splitBySpaces(valueOfKey)
                            .map(c=>{
                                if(searching.find(x=>c.includes(x))){
                                    console.log(c);
                                    return <span>{c}</span>
                                }
                                return c
                            });
                        // splitBySpaces
                        console.log(valueOfKey);
                        console.log(highlight);
                        const p = <p></p>;
                        // console.log(post.match[key]);
                    }
                }
                console.log(post.match);
                return post;
            });
        console.log(test);
    },[search, data, checkSimilarity, similarityObj]);
    
    return (
        <div></div>
    )
}

export default SearchResults;




// Some old code i may use it later!!!
// #####################################
// const findSimilarity = c=>searching.find(s=>c.toLowerCase().includes(s.toLowerCase()) ? c : null);

// export default class SearchHelper{
//     constructor(data, search){
//         this.searching = this.format(search);
//         this.data = data;
//         return this.result();
//     }

//     format(string){
//         return string
//             .split(' ')
//             .filter(x=>x!=='');
//     }

//     similarityObj({content, title, description}){
//         return {
//             contentMatch : this.checkSimilarity(this.format(content)),
//             titleMatch : this.checkSimilarity(this.format(title)),
//             descriptionMatch : this.checkSimilarity(this.format(description))
//         }
//     }

//     checkSimilarity(formatted){
//         return this.searching.every(s=>formatted.find(c=>c.toLowerCase().includes(s.toLowerCase())));
//     };

//     result(){
//         return this.data
//             .filter(post=>{
//                 const {contentMatch, titleMatch, descriptionMatch} = this.similarityObj(post);
//                 return (contentMatch||descriptionMatch || titleMatch) ? post : null;
//             })
//             .map(post=>{
//                 const {contentMatch, titleMatch, descriptionMatch} = this.similarityObj(post);
//                 const match = {
//                     contentMatch, 
//                     titleMatch, 
//                     descriptionMatch
//                 };
//                 return {...post, match};
//             });
//     }
// }