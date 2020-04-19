import React, {useEffect} from 'react';
import styles from './App.module.css';
import {Route, Switch} from 'react-router-dom';
import Skills from './pages/Skills/Skills'
import Videos from './pages/Videos/Videos'
import Posts from './pages/Posts/Posts'
import Layout from './hoc/Layout/Layout'
import FirebaseAuth from './helpers/FirebaseAuth';
import UserContext from './context/UserContext'

function App() {
    const {user} = FirebaseAuth(); 
    console.log('Running App');
    
    const routes = (
        <Switch>
            <Route 
                path="/" 
                render={(props)=>
                    <Posts {...props} 
                        title="Recently Added"
                        description="Recently added code snippets"
                />}
                exact 
            />
            <Route 
                path="/oldest" 
                render={(props)=>
                    <Posts {...props} 
                        title="Oldest first"
                        description="Oldest code snippets first"
                />} 
            />
            <Route 
                path="/random" 
                render={(props)=>
                    <Posts {...props} 
                        title="Random"
                        description="For fun randomly ordered"
                />} 
            />
            <Route path="/Videos" component={Videos}/>
            <Route path="/skills" component={Skills}/>
        </Switch>
    )

    return (
        <div className={styles.App}>
            <UserContext.Provider value={user}>
                <Layout>
                    {routes}
                </Layout>    
            </UserContext.Provider>
        </div>
    );
}

export default App;
