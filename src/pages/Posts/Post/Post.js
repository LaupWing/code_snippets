import React from 'react';
import styles from './Post.module.css';
import Icon from '../../../icons/Icon';

function Post({post}){
    return(
        <div className={styles.Post}>
            <div className={styles.skill}>
                <Icon skill={post.skill}/>
                <h3>{post.skill}</h3>
            </div>
            <div className={styles.content}>
                <h3>{post.title}</h3>
                <p>{post.description}</p>
            </div>
        </div>
    );
}

export default Post;