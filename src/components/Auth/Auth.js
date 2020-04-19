import React, {useState, useContext, useRef} from 'react';
import Login from './Login/Login'
import Register from './Register/Register';
import styles from './Auth.module.css';
import UserContext from '../../context/UserContext';

function Auth(){
    const [loginDisplay, setLoginDisplay] = useState(true);
    const [error, setError] = useState(null);
    const {login} = useContext(UserContext);
    const formEl = useRef(null);

    const handleSubmit = async e =>{
        e.preventDefault();
        if(loginDisplay){
            const {email} = formEl.current;
            const {password} = formEl.current;
            
            if(email.value === '' || password.value === ''){
                setError('Fill in both fields');
            }else{
                const error = await login({email: email.value, password:password.value});
                if(error){
                    setError('Credentials doesnt match');
                }
            }
        }else{
            console.log('Register account')
        }

    }
    return (
        <form ref={formEl} onSubmit={handleSubmit} className={styles.Auth}>
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
            {loginDisplay ? <Login error={error}/> : <Register error={error}/>}
        </form>
    );
}

export default Auth;