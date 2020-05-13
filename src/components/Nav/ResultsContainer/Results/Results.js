import React from 'react';
import Result from './Result/Result';
import highlight from './Parts/Highlight'; 
// import styles from './Results.module.css'; 

function SearchResults(props){
    const {data, search, setSearch} = props;
    const results = highlight(data, search);
    
    const resultsElements = results.map(x=><Result 
        key={x.id} 
        post={x}
        setSearch={setSearch}
    />);
    return (
        <>{resultsElements}</>
    )
}


export default SearchResults;