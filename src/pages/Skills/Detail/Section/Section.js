import React from 'react';
import styles from './Section.module.css'

function Section({section, data}){
    console.log(data);
    return (
        <div className={styles.Section}>
            <h2>{section}</h2>
        </div>
    );
}

export default Section;