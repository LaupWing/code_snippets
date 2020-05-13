import React from 'react';
import Icon from '../../../../../icons/Icon';
import styles from './Result.module.css';
import {Link} from 'react-router-dom';

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
    return (
        <Link className={styles.Result} to={`/detail/${post.id}`}>
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
        </Link>
    );
}

export default Result;