import {createContext} from 'react';

const DataContext = createContext({
    data: [],
    addPost: ()=>{},
    searchingResults: null
});

export default DataContext;