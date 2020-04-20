import React from 'react';
import {useContext} from 'react';
import UserContext from '../../context/UserContext';

function Posts(props){
    const {data} = useContext(UserContext);
    let formattedData = data;
    console.log(formattedData);
    if(props.location.pathname.includes('oldest')){
        console.log('Transform data from oldest first');
        console.log(data);
    }else if(props.location.pathname.includes('random')){
        console.log('Transform data random');
    }else{
        console.log('Transform form newest'); 
    }
    return (
        <>
            <h2>{props.title}</h2>
            <p>{props.description}</p>
            <section>

            </section>
        </>
    );
}

export default Posts;