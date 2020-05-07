import React, {useContext} from 'react';
import DataContext from '../../context/DataContext';
import Icon from '../../icons/Icon'; 
import styles from './Detail.module.css';
import getDate from '.././../helpers/getDate';
import Content from './Content/Content';

function Detail(props){
    const {data} = useContext(DataContext);
    const id  = props.match.params.id;
    const post = data.find(p=>p.id===id);
    const date = getDate(post);

    return (
        <>
            <header className={styles['Detail-Header']}>
                <div className={styles.skill}>
                    <Icon skill={post.skill}/>
                    <h4>{post.skill}</h4>
                    <h5>{post.section}</h5>
                </div>
                <div className={styles.meta}>
                    <i>{date}</i>
                    <h2>{post.title}</h2>
                    <p>{post.description}</p>
                </div>
            </header>
            <Content content={post.content}/>
        </>
    );
}

export default Detail;