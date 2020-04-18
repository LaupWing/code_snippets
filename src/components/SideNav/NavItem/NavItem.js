import React from 'react';
import {NavLink} from 'react-router-dom';
import styles from './NavItem.module.css';

export default (props)=>(
    <NavLink activeClassName={styles.active} to={props.link} exact={props.exact}>
        <li>{props.text}</li>
    </NavLink>
)