import React from 'react';
import ReactDOM from 'react-dom';
import './main.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter} from 'react-router-dom';
import firebase from 'firebase';
import './db';
import './helpers/FireabaseData';

let flag = true

firebase.auth().onAuthStateChanged(()=>{
    if(!flag)   return
    flag = false
    ReactDOM.render(
        <React.StrictMode>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </React.StrictMode>,
        document.getElementById('root')
    );
});

serviceWorker.unregister();