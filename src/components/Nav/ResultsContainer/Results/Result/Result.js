import React from 'react';
import Icon from '../../../../../icons/Icon';
import styles from './Result.module.css';

function Result({post}){
    const founded = [];
    for(const key in post.match){
        if(post.match[key]){
            founded.push({
                type: key,
                content:post.match[key]
            });
        }
    };
    // console.log(post);
    console.log(founded);

    return (
        <div className={styles.Result}>
            <Icon skill={post.skill}/>
            <div className={styles.content}>
                <p>
                    <span className={styles.meta}>Meta: </span> 
                    <span className={styles.title}>{post.title}: </span> 
                    <span className={styles.description}>{post.description}</span>
                </p>
                <div className={styles.foundIn}>
                    <i>
                        Seaches found in:
                    </i>
                    {founded.map((x,i)=>{
                        return <i key={i}>
                            <b>{x.type}: </b>
                            {x.content}
                        </i>
                    })}
                </div>
            </div>
        </div>
    );
}

export default Result;