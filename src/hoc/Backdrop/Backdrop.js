import React from 'react';
import styles from './Backdrop.module.css';

export default (props)=>(
    <div className={styles.Backdrop}>
        {props.children}
    </div>
)