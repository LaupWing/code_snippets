import React from 'react';

function Login(props){
    return(
        <div>
            Login
            <li onClick={()=>props.switch(false)}>Dont have an account? Click here to register</li>
        </div>
    );
}

export default Login; 