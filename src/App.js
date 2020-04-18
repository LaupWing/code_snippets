import React from 'react';
import styles from './App.module.css';
import {Route, Switch} from 'react-router-dom';
import Skills from './pages/Skills/Skills'
import Posts from './pages/Posts/Posts'
import Layout from './hoc/Layout/Layout'


function App() {
    const routes = (
        <Switch>
            <Route 
                path="/" 
                render={(props)=><Posts {...props} title="Recently Added"/>} 
            />
            <Route 
                path="/oldest" 
                render={(props)=><Posts {...props} title="Oldes first"/>} 
            />
            <Route 
                path="/random" 
                render={(props)=><Posts {...props} title="Random"/>} 
            />
            <Route path="/skills" component={Skills}/>
        </Switch>
    )

    return (
        <div className={styles.App}>
            <Layout>
                {routes}
            </Layout>    
        </div>
    );
}

export default App;
