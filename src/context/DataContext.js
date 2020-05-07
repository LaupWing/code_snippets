import {createContext} from 'react';

const DataContext = createContext({
    data: [],
    addPost: ()=>{}
});

export default DataContext;