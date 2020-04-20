import React from 'react';
import styles from './Post.module.css';
import Icon from '../../../icons/Icon';

function Post({post}){
    return(
        <div className={styles.Post}>
            <Icon skill={post.skill}/>
        </div>
    );
}

export default Post;