import React,{ useContext} from 'react';
import styles from './Nav.module.css';
import UserContext from '../../context/UserContext';
import AddBtn from './Add/Add'

export default (props)=>{
    const {user, logout, userInfo} = useContext(UserContext);
    return (
        <header className={styles.Header}>
            <nav className={styles.Nav}>
                <h1>Code Snippets</h1>
                <input type="text" placeholder="What do you want to find?..."></input>
                {!user ? 
                    <button onClick={props.setModal} className={styles.Auth}>Login</button> :
                    <button onClick={logout} className={styles.Auth}>Logout</button>
                }
                {userInfo && <AddBtn userInfo={userInfo}/>}
            </nav>
        </header>
    );
}
