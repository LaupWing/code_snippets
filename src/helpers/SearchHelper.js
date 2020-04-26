export default (data, search)=>{
    const format = (string)=>{
        return string
            .split(' ')
            .filter(x=>x!=='');
    }
    const searching = format(search); 
    const findSimilarity = c=>searching.find(s=>c.includes(s) ? c : null)

    const testing =  data.filter(post=>{
        const {content, title, description} = post;
        const contentMatch =  format(content).find(findSimilarity);
        const titleMatch =  format(title).find(findSimilarity);
        const descriptionMatch =  format(description).find(findSimilarity);
        if(contentMatch){
            console.log({
                contentMatch,
                titleMatch,
                descriptionMatch
            });
        }
        return (contentMatch||descriptionMatch || titleMatch) ? post : null;
    });
    console.log(testing);
    // console.log(test)
}