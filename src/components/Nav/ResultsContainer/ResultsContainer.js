import React, {useContext, useState, useEffect, useRef} from 'react';
import DataContext from '../../../context/DataContext';
import Results from './Results/Results';
import styles from './ResultsContainer.module.css';

function ResultsContainer({search, setSearch, filterBy}){
    const {data} = useContext(DataContext);
    const [cleanData, setCleanData] = useState([]);
    const container = useRef();

    useEffect(()=>{
        const cleanup = data
            .map(d=>{
                const copy = {...d}; 
                copy.content = d.content.blocks
                    .map(x=>x.text)
                    .filter(x=>x!=='')
                    .join(' ');
                return copy;
            })
            .filter(x=>{
                if(filterBy === 'all'){
                    return x
                }else{
                    return x.skill === filterBy
                }
            });
        setCleanData(cleanup);
    },[data, filterBy]);
    const parentWidth = container.current ? 
        container.current.parentElement.offsetWidth : 
        null;

    const searchResult = <Results 
        setSearch={setSearch} 
        data={cleanData} 
        search={search}
    />;
    return(
        <div ref={container} style={{width: `${parentWidth}px`}} className={styles.container}>{searchResult}</div>
    );
}

export default ResultsContainer;