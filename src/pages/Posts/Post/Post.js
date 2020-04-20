import React from 'react';
import styles from './Post.module.css';
import Icon from '../../../icons/Icon';
import dateFormat from 'dateformat';

function Post({post}){
    const date = new Date(post.createdAt.seconds*1000);
    const createdAt = dateFormat(date);
    
    return(
        <div className={styles.Post}>
            <div className={styles.skill}>
                <Icon skill={post.skill}/>
                <h3>{post.skill}</h3>
            </div>
            <div className={styles.content}>
                <i>{createdAt}</i>
                <h3>{post.title}</h3>
                <p>{post.description}</p>
            </div>
        </div>
    );
}

export default Post;