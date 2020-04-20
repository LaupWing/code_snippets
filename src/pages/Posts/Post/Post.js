import React from 'react';
import styles from './Post.module.css';

function Post(props){
    console.log(props.post);
    return(
        <div className={styles.Post}>
            test
        </div>
    );
}

export default Post;