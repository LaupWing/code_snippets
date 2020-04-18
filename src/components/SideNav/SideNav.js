import React from 'react'
import styles from './SideNav.module.css'

export default ()=>{
    return (
        <ul className={styles.SideNav}>
            <h2>Orderd By</h2>
            <li className={styles.active}>Recent</li>
            <li>Oldest</li>
            <li>Random</li>
            <li>Videos</li>
            <li>Skills</li>
        </ul>
    )
}