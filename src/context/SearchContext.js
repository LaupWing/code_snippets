import {createContext} from 'react';

const SearchingContext = createContext({
    searchingResults: {},
    setSearchingResults: ()=>{},
});

export default SearchingContext;