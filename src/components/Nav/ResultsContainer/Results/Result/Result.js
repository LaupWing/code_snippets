import React from 'react';
import Icon from '../../../../../icons/Icon';
import styles from './Result.module.css';

function Result({post}){
    console.log('Coming from result');
    console.log(post);

    return (
        <div className={styles.Result}>
            <Icon skill={post.skill}/>
            <div className={styles.content}>
                <p>
                    <span className={styles.meta}>Meta: </span> 
                    <span className={styles.title}>{post.title}: </span> 
                    <span className={styles.description}>{post.description}</span>
                </p>
            </div>
        </div>
    );
}

export default Result;