import React, {useState} from 'react';
import Login from './Login/Login'
import Register from './Register/Register';
import styles from './Auth.module.css';

function Auth(){
    const [loginDisplay, setLoginDisplay] = useState(true)
    return (
        <form className={styles.Auth}>
            <nav>
                <li 
                    className={loginDisplay ? styles.active :null}
                    onClick={()=>setLoginDisplay(true)}
                >
                    Login
                </li>
                <li 
                    className={!loginDisplay ? styles.active : null}
                    onClick={()=>setLoginDisplay(false)}
                >
                    Register
                </li>
            </nav>
            {loginDisplay ? <Login /> : <Register/>}
        </form>
    );
}

export default Auth;