import React from 'react';
import styles from './Skill.module.css';

function Skill({skill}){
    console.log(skill);
    return(
        <div className={styles.Skill}>{skill.skill}</div>
    );
}

export default Skill;