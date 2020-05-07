import React, {useContext} from 'react';
import SearchContext from '../../context/SearchContext';

function Search(){
    const {searchingResults} = useContext(SearchContext);
    console.log(searchingResults);
        
    return (<h2>Search</h2>);
}

export default Search;