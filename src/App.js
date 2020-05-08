import React, {useState} from 'react';
import styles from './App.module.css';
import {Route, Switch} from 'react-router-dom';
import Skills from './pages/Skills/Skills'
import Search from './pages/Search/Search'
import Videos from './pages/Videos/Videos'
import Posts from './pages/Posts/Posts'
import Detail from './pages/Detail/Detail'
import Layout from './hoc/Layout/Layout'
import FirebaseAuth from './helpers/FirebaseAuth';
import FirebaseData from './helpers/FirebaseData';
import UserContext from './context/UserContext';
import DataContext from './context/DataContext';
import SearchContext from './context/SearchContext';

function App() {
    const {
        user, 
        login,
        logout,
        signup} = FirebaseAuth(); 
    const {
        data,
        userInfo,
        setUserInfo,
        addPost} = FirebaseData();
    const [searchingResults, setSearchingResults] = useState(null);
    
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
            <Route path="/search" component={Search}/>
            <Route path="/skills" component={Skills}/>
            <Route path="/detail/:id" component={Detail}/>
        </Switch>
    )

    return (
        <div className={styles.App}>
            <UserContext.Provider value={{
                user, 
                login,
                signup, 
                logout, 
                userInfo,
                setUserInfo,
            }}
            >
                <DataContext.Provider value={{
                    data,
                    addPost,
                }}
                >
                    <SearchContext.Provider value={{
                        searchingResults,
                        setSearchingResults
                    }}>
                        {data && <Layout>
                            {routes}
                        </Layout> }   
                    </SearchContext.Provider>
                </DataContext.Provider>
            </UserContext.Provider>
        </div>
    );
}

export default App;
