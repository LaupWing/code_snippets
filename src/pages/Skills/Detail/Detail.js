import React from 'react';
import {useParams, useHistory} from 'react-router-dom';
import Icon from '../../../icons/Icon';
import styles from './Detail.module.css';
import ArrayHelpers from '../../../helpers/Arrayhelpers';
import Section from './Section/Section';

function Detail({data}){
    const {id} = useParams();
    const detail = data.find(s=>s.skill ===id);
    const sections = ArrayHelpers.removeDuplicates(detail.posts.map(x=>x.section));
    const {push} = useHistory();
    
    return (
        <>
            <button onClick={()=>push('/skills')} className={styles.backBtn}>Back to Overview</button>
            <header className={styles['Detail-Header']}>
                <Icon skill={detail.skill}/>
                <div className={styles.meta}>
                    <h2>{detail.skill}</h2>
                    <p>
                        Posts<span> {detail.posts.length} </span> 
                        Sections<span> {sections.length}</span>
                    </p>
                </div>
            </header>
            <section className={styles['Detail-Section']}>
                {sections && sections.map((section, i)=>(
                    <Section
                        section={section}
                        data={detail.posts.filter(x=>x.section === section)}
                        key={i}
                    />
                ))}
            </section>
        </>
    );
}

export default Detail;