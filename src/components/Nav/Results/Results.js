import React, {useContext, useState, useEffect} from 'react';
import DataContext from '../../../context/DataContext';
import SearchHelper from '../../../helpers/SearchHelper';

function Results({search}){
    const {data} = useContext(DataContext);
    const [cleanData, setCleanData] = useState([]);

    useEffect(()=>{
        const cleanup = data
            .map(d=>{
                const copy = {...d}; 
                copy.content = d.content.blocks
                    .map(x=>x.text)
                    .filter(x=>x!=='')
                    .join(' ');
                return copy
            });
        setCleanData(cleanup);
    },[data]);
    const searchResult = new SearchHelper(cleanData , search);
    console.log(searchResult);
    return(
        <div></div>
    );
}

export default Results;