import React from 'react';
import styles from './Nav.module.css'

export default ()=>{
    return (
        <nav className={styles.Nav}>
            <h1>Code Snippets</h1>
            <input type="text" placeholder="What do you want to find?..."></input>
        </nav>
    )
}
