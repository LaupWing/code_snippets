import React from 'react';

export default (props)=>{
    console.log(props)
    return (
        <React.Fragment>
            <h2>{props.title}</h2>
            <p>{props.description}</p>
        </React.Fragment>
    )
}

