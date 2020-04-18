import React from 'react'
import styles from './SideNav.module.css'
import {NavLink} from 'react-router-dom'

export default ()=>{
    return (
        <ul className={styles.SideNav}>
            <h2>Orderd By</h2>
            <NavLink to="/">
                <li className={styles.active}>Recent</li>
            </NavLink>
            <NavLink to="/oldest">
                <li>Oldest</li>
            </NavLink>
            <NavLink to="/random">
                <li>Random</li>
            </NavLink>
            <NavLink to="/videos">
                <li>Videos</li>
            </NavLink>
            <NavLink to="/skills">
                <li>Skills</li>
            </NavLink>
        </ul>
    )
}