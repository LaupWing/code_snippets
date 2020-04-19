import React from 'react';

function Posts(props){
    return (
        <>
            <h2>{props.title}</h2>
            <p>{props.description}</p>
        </>
    );
}

export default Posts;

