export default (data, search)=>{
    const format = (string)=>{
        return string
            .split(' ')
            .filter(x=>x!=='');
    }
    const searching = format(search); 
    const findSimilarity = c=>searching.find(s=>c.toLowerCase().includes(s.toLowerCase()) ? c : null)
    const similarityObj = ({content, title, description})=>({
        contentMatch : format(content).find(findSimilarity),
        titleMatch : format(title).find(findSimilarity),
        descriptionMatch : format(description).find(findSimilarity)
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
    // console.log(testing);
    // console.log(test)
    return searchedData
}