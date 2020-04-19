import React from 'react';
import styles from '../Auth.module.css';

function Register(){
    return(
        <div className={styles.cred}>
            <div className={styles.field}>
                <label>Email:</label>
                <input type="text" placeholder="Email"></input>
            </div>
            <div className={styles.field}>
                <label>Password:</label>
                <input type="password" placeholder="Password"></input>
            </div>
            <div className={styles.field}>
                <label>Confirm Password:</label>
                <input type="password" placeholder="Password"></input>
            </div>
            <button>Register</button>
        </div>
    );
}

export default Register; 