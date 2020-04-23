import React from 'react';
import {useContext} from 'react';
import DataContext from '../../context/DataContext';
import Post from './Post/Post';
import styles from './Posts.module.css';
import ArrayHelpers from '../../helpers/arrayhelpers';

function Posts(props){
    const {data} = useContext(DataContext);
    let posts = null;
    
    if(props.location.pathname.includes('oldest')){
        posts = data.sort((a,b)=> new Date(a.createdAt.seconds) - new Date(b.createdAt.seconds));
    }else if(props.location.pathname.includes('random')){
        posts = ArrayHelpers.shuffle(data);
    }else{
        posts = data.sort((a,b)=>new Date(b.createdAt.seconds) - new Date(a.createdAt.seconds));
    }
    const postsEl = posts.map((p, i)=>(<Post key={i} post={p}/>));

    return (
        <>
            <h2>{props.title}</h2>
            <p>{props.description}</p>
            <section className={styles.content}>
                {postsEl}
            </section>
        </>
    );
}

export default Posts;