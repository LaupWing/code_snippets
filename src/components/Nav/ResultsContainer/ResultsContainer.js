import React, {useContext, useState, useEffect, useRef} from 'react';
import DataContext from '../../../context/DataContext';
import Results from './Results/Results';
import styles from './ResultsContainer.module.css';

function ResultsContainer({search, setSearch, filterSkill, filterSection}){
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
                if(filterSkill === 'all'){
                    return x
                }else{
                    return x.skill === filterSkill
                }
            })
            .filter(x=>{
                if(filterSection === 'all'){
                    return x
                }else{
                    return x.section === filterSection
                }
            });
        setCleanData(cleanup);
    },[data, filterSkill, filterSection]);
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