import React, {useState} from 'react';
import Nav from '../../components/Nav/Nav';
import SideNav from '../../components/SideNav/SideNav';
import styles from './Layout.module.css';
import Modal from '../../components/Modal/Modal';
import Auth from '../../components/Auth/Auth'

function Layout(props){
    const [modal, setModal] = useState(false);
    return(
        <>
            <Nav setModal={()=>setModal(true)}/>
            <main className={styles.content}>
                <SideNav/>
                <section className={styles.Section}>
                    {props.children}
                </section>
            </main>
            {modal && 
                <Modal close={()=>setModal(false)}>
                    <Auth closeModal={()=>setModal(false)}/>
                </Modal>
            }
        </>
    );
}

export default Layout;