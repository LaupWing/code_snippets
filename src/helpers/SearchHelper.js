export default ({content}, search)=>{
    const searching = search
        .split(' ')
        .filter(x=>x!=='');

    const contentMatch =  content.split(' ')
    console.log(contentMatch);
    console.log(searching);
}