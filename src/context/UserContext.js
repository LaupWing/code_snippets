import {createContext} from 'react';

const UserContext = createContext({
    user: {},
    login: ()=>{},
    signup: ()=>{},
    logout: ()=>{},
    setUserInfo: ()=>{},
    userInfo: {}
});

export default UserContext;