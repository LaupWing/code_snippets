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
                return {
                    content: copy.content,
                    title: copy.title,
                    description: copy.description
                }
            });
        setCleanData(cleanup);
    },[data]);

    SearchHelper(cleanData , search);
    return(
        <div></div>
    );
}

export default Results;