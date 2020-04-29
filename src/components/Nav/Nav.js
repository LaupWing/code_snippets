import React,{ useContext, useState} from 'react';
import styles from './Nav.module.css';
import UserContext from '../../context/UserContext';
import AddBtn from './Add/AddBtn';
import ResultsContainer from './ResultsContainer/ResultsContainer';

export default (props)=>{
    const {user, logout, userInfo, setUserInfo} = useContext(UserContext);
    const [search, setSearch] = useState('');

    const loggingOut = ()=>{
        logout();
        setUserInfo(null);
    }

    return (
        <header className={styles.Header}>
            <nav className={styles.Nav}>
                <h1>Code Snippets</h1>
                <div className={styles.Search}>
                    <input 
                        type="text" 
                        placeholder="What do you want to find?..."
                        onChange={(e)=> setSearch(e.target.value)}
                        value={search}
                    ></input>
                    {search !== '' && <ResultsContainer search={search}/>}
                </div>
                {!user ? 
                    <button onClick={props.setModal} className={styles.Auth}>Login</button> :
                    <button onClick={loggingOut} className={styles.Auth}>Logout</button>
                }
                {userInfo && <AddBtn userInfo={userInfo}/>}
            </nav>
        </header>
    );
}
