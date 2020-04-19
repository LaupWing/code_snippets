import React,{ useContext} from 'react';
import styles from './Nav.module.css';
import UserContext from '../../context/UserContext';

export default (props)=>{
    const user = useContext(UserContext);
    console.log(user)
    return (
        <header className={styles.Header}>
            <nav className={styles.Nav}>
                <h1>Code Snippets</h1>
                <input type="text" placeholder="What do you want to find?..."></input>
                <li onClick={props.login} className={styles.Auth}>Login</li>
            </nav>
        </header>
    );
}
