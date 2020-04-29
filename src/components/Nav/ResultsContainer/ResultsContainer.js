import React, {useContext, useState, useEffect} from 'react';
import DataContext from '../../../context/DataContext';
import Results from './Results/Results';

function ResultsContainer({search}){
    const {data} = useContext(DataContext);
    const [cleanData, setCleanData] = useState([]);

    useEffect(()=>{
        const cleanup = data
            .map(d=>{
                const copy = {...d}; 
                copy.content = d.content.blocks
                    .map(x=>x.text.trim())
                    .filter(x=>x!=='')
                    .join(' ');
                return copy
            });
        setCleanData(cleanup);
    },[data]);

    const searchResult = <Results data={cleanData} search={search}/>;
    
    return(
        <div>{searchResult}</div>
    );
}

export default ResultsContainer;