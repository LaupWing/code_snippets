import React from 'react';
import {useContext} from 'react';
import DataContext from '../../context/DataContext';
import Post from './Post/Post';
import styles from './Posts.module.css';
import ArrayHelpers from '../../helpers/arrayhelpers';

function Posts(props){
    const {data} = useContext(DataContext);
    let posts = null;
    const setPosts = (ordererd)=>{
        posts = ordererd.map((p, i)=>(<Post key={i} post={p}/>));
    }
    if(props.location.pathname.includes('oldest')){
        const orderByOldest = data.sort((a,b)=> new Date(a.createdAt.seconds) - new Date(b.createdAt.seconds));
        setPosts(orderByOldest);
    }else if(props.location.pathname.includes('random')){
        const randomized = ArrayHelpers.shuffle(data);
        setPosts(randomized);
    }else{
        const orderByRecent = data.sort((a,b)=>new Date(b.createdAt.seconds) - new Date(a.createdAt.seconds));
        setPosts(orderByRecent);
    }
    

    return (
        <>
            <h2>{props.title}</h2>
            <p>{props.description}</p>
            <section className={styles.content}>
                {posts}
            </section>
        </>
    );
}

export default Posts;