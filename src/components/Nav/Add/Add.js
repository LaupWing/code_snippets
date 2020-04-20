import React from 'react';
import styles from './Add.module.css';

export default ({userInfo})=>{
    const flag = false;
    return ( userInfo.type === 'admin' &&
        <>
            <button className={styles.Add}>Add</button>
            {flag && <p>hi</p>}
        </>
    );
}