import React, {useContext} from 'react';
import DataContext from '../../../context/DataContext';
import SearchHelper from '../../../helpers/SearchHelper';

function Search({search}){
    const {data} = useContext(DataContext);
    console.log(data)
    const cleanup = data
        .map(d=>{
            d.content = d.content.blocks
                .map(x=>x.text)
                .filter(x=>x!=='')
                .join(' ');
            return {
                content: d.content,
                title: d.title,
                description: d.description
            }
        })

    // SearchHelper(cleanup , search)
    return(
        <div></div>
    );
}

export default Search;