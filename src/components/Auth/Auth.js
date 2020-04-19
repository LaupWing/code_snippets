import React, {useState} from 'react';
import Login from './Login/Login'
import Register from './Register/Register'

function Auth(){
    const [loginDisplay] = useState(true)
    return (
        <form>
            {loginDisplay ? <Login/> : <Register/>}

        </form>
    );
}

export default Auth;