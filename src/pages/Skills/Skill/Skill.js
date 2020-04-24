import React from 'react';
import styles from './Skill.module.css';
import Icon from '../../../icons/Icon';
function Skill({skill}){
    return(
        <div className={styles.Skill}>
            <Icon skill={skill.skill}/>
            <h2>
                {skill.skill}
            </h2>
        </div>
    );
}

export default Skill;