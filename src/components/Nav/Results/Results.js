import React, {useContext} from 'react';
import DataContext from '../../../context/DataContext'

function Search({search}){
    const {data} = useContext(DataContext);
    console.log(data)
    const cleanup = data.map(d=>{
        const copy = d;
        copy.content = d.content.blocks
            .map(x=>x.text)
            .filter(x=>x!=='')
            .join(' ');
        return copy
    })
    console.log(cleanup);
    return(
        <div></div>
    );
}

export default Search;