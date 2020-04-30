import React from 'react';
import Icon from '../../../../../icons/Icon';
import styles from './Result.module.css';

function Result({post}){
    console.log('Coming from result');
    console.log(post);

    return (
        <div className={styles.Result}>
            <Icon skill={post.skill}/>
            result
        </div>
    );
}

export default Result;