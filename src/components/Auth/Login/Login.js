import React from 'react';
import styles from '../Auth.module.css';

function Login(props){
    return(
        <div className={styles.cred}>
            <div className={styles.field}>
                <label>Email:</label>
                <input name="email" type="text" placeholder="Email"></input>
            </div>
            <div className={styles.field}>
                <label>Password:</label>
                <input name="password" type="password" placeholder="Password"></input>
            </div>
            {props.error && <p>{props.error}</p>}
            <button>Login</button>
        </div>
    );
}

export default Login; 