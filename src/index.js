import React from 'react';
import ReactDOM from 'react-dom';
import './main.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter} from 'react-router-dom';
import firebase from 'firebase';
import './db';


firebase.auth().onAuthStateChanged(()=>{
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