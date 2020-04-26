export default (data, search)=>{
    const format = (string)=>{
        return string
            .split(' ')
            .filter(x=>x!=='');
    }
    const searching = format(search);

    const testing =  data.filter(post=>{
        const {content} = post;
        const contentMatch =  format(content)
            .find(c=>{
                const matching = searching.find(s=>c.includes(s));
                return matching ? c : null; 
            });
            return contentMatch ? post : null;
        });
    console.log(testing);
    // console.log(test)
}