import React from 'react';
import styles from './Skill.module.css';
import Icon from '../../../../icons/Icon';
import {Link, useHistory} from 'react-router-dom'

function Skill({skill}){
    const {pathname} = useHistory().location;
    return(
        <Link to={`${pathname}/${skill.skill}`}>
            <div className={styles.Skill}>
                <Icon skill={skill.skill}/>
                <h2>
                    {skill.skill} <span>{skill.posts.length}</span>
                </h2>
            </div>
        </Link>
    );
}

export default Skill;