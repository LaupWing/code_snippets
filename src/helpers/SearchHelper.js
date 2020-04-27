export default class SearchHelper{
    constructor(data, search){
        this.searching = this.format(search);
        this.data = data;
        return this.result()
    }

    format = string =>{
        return string
            .split(' ')
            .filter(x=>x!=='');
    }

    similarityObj = ({content, title, description})=>({
        contentMatch : this.checkSimilarity(this.format(content)),
        titleMatch : this.checkSimilarity(this.format(title)),
        descriptionMatch : this.checkSimilarity(this.format(description))
    })

    checkSimilarity = formatted => this.searching.every(s=>formatted.find(c=>c.toLowerCase().includes(s.toLowerCase())));

    result = ()=>{
        return this.data
            .filter(post=>{
                const {contentMatch, titleMatch, descriptionMatch} = this.similarityObj(post);
                return (contentMatch||descriptionMatch || titleMatch) ? post : null;
            })
            .map(post=>{
                const {contentMatch, titleMatch, descriptionMatch} = this.similarityObj(post);
                const match = {
                    contentMatch, 
                    titleMatch, 
                    descriptionMatch
                }
                return {...post, match}
            });
    }
}



// Some old code i may use it later!!!
// const findSimilarity = c=>searching.find(s=>c.toLowerCase().includes(s.toLowerCase()) ? c : null);