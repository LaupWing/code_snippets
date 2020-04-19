import React, {useState} from 'react';
import Nav from '../../components/Nav/Nav';
import SideNav from '../../components/SideNav/SideNav';
import styles from './Layout.module.css';
import Modal from '../../components/Modal/Modal';
import Auth from '../../components/Auth/Auth'

function Layout(props){
    const [login, setLogin] = useState(false);
    return(
        <>
            <Nav login={()=>setLogin(!login)}/>
            <main className={styles.content}>
                <SideNav/>
                <section className={styles.Section}>
                    {props.children}
                </section>
            </main>
            {login && 
                <Modal close={()=>setLogin(false)}>
                    <Auth/>
                </Modal>
            }
        </>
    );
}

export default Layout;