import React from 'react';
import styles from './Skill.module.css';

function Skill({skill, posts}){
    console.log(posts);
    return(
        <div className={styles.Skill}>{skill}</div>
    );
}

export default Skill;