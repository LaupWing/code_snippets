import React, {useContext} from 'react';
import DataContext from '../../context/DataContext';
import Icon from '../../icons/Icon'; 
import styles from './Detail.module.css';

function Detail(props){
    const {data} = useContext(DataContext);
    const id  = props.match.params.id;
    const post = data.find(p=>p.id===id);
    const date = 
    console.log(post);

    return (
        <>
            <header className={styles['Detail-Header']}>
                <div className={styles.skill}>
                    <Icon skill={post.skill}/>
                    <h4>{post.skill}</h4>
                    <h5>{post.section}</h5>
                </div>
                <div className={styles.meta}>
                    {/* <i>{post.createdAt}</i> */}
                    <h2>{post.title}</h2>
                    <p>{post.description}</p>
                </div>
            </header>
        </>
    );
}

export default Detail;