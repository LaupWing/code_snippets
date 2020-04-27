export default (data, search)=>{
    const format = (string)=>{
        return string
            .split(' ')
            .filter(x=>x!=='');
    }
    const searching = format(search);

    const checkSimilarity = formatted => searching.every(s=>formatted.find(c=>c.toLowerCase().includes(s.toLowerCase())));

    const similarityObj = ({content, title, description})=>({
        contentMatch : checkSimilarity(format(content)),
        titleMatch : checkSimilarity(format(title)),
        descriptionMatch : checkSimilarity(format(description))
    });
    
    const searchedData =  data
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
        }
        return {...post, match}
    });
    
    return searchedData;
}


// Some old code i may use it later!!!
// const findSimilarity = c=>searching.find(s=>c.toLowerCase().includes(s.toLowerCase()) ? c : null);