import React from 'react';
import styles from './Post.module.css';
import Icon from '../../../icons/Icon';
import getDate from '../../../helpers/getDate';
import {Link} from 'react-router-dom';

function Post({post}){
    const createdAt = getDate(post);
    
    return(
        <Link to={`/detail/${post.id}`}>
            <div className={styles.Post}>
                <div className={styles.skill}>
                    <Icon skill={post.skill}/>
                    <h3>{post.skill}</h3>
                </div>
                <div className={styles.content}>
                    <i><span>{post.skill}: {post.section}</span>{createdAt}</i>
                    <h3>{post.title}</h3>
                    <p>{post.description}</p>
                </div>
            </div>
        </Link>
    );
}

export default Post;