import React from 'react';
import styles from './App.module.css';
import {Route, Switch} from 'react-router-dom';
import Skills from './pages/Skills'
import Layout from './hoc/Layout/Layout'


function App() {
    const routes = (
        <Switch>
            <Route path="/" component={Skills}/>
        </Switch>
    )


    return (
        <Layout>
            {routes}
        </Layout>    
    );
}

export default App;
