import React from 'react';
import Icon from '../../../../../icons/Icon';

function Result({post}){
    console.log('Coming from result');
    console.log(post);

    return (
        <div>
            <Icon skill={post.skill}/>
            result
        </div>
    );
}

export default Result;