import React, {useState} from 'react';
import Login from './Login/Login'
import Register from './Register/Register'

function Auth(){
    const [loginDisplay, setLoginDisplay] = useState(true)
    return (
        <form>
            {loginDisplay ? 
                <Login switch={setLoginDisplay}/> : 
                <Register switch={setLoginDisplay}/>
            }
        </form>
    );
}

export default Auth;