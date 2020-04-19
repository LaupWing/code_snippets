import React from 'react';
import {useContext} from 'react';
import UserContext from '../../context/UserContext';

function Posts(props){
    const {data} = useContext(UserContext);
    console.log(data);
    return (
        <>
            <h2>{props.title}</h2>
            <p>{props.description}</p>
        </>
    );
}

export default Posts;

