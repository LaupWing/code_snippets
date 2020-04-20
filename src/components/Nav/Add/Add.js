import React from 'react';
import styles from './Add.module.css';

export default ({userInfo})=>{

    return ( userInfo.type === 'admin' &&
        <button className={styles.Add}>Add</button>
    );
}