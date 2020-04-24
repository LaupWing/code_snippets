import React from 'react';
import styles from './Skill.module.css';
import Icon from '../../../icons/Icon';
function Skill({skill}){
    console.log(skill)
    return(
        <div className={styles.Skill}>
            <Icon skill={skill.skill}/>
            <h2>
                {skill.skill} <span>{skill.posts.length}</span>
            </h2>
        </div>
    );
}

export default Skill;