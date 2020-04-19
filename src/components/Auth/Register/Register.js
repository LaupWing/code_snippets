import React from 'react';

function Register(props){
    return(
        <div>
            Register
            <li onClick={props.switch(true)}>Already have an account? Click here to login</li>
        </div>
    );
}

export default Register; 