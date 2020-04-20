import React, {useContext} from 'react';
import styles from './SideNav.module.css';
import NavItem from './NavItem/NavItem';
import UsercContext from '.././../context/UserContext';
import {useLocation} from 'react-router-dom';

export default ()=>{
    const {user} = useContext(UsercContext);
    const location = useLocation();

    const links = [
        {
            text: 'Recent',
            link: '/',
            exact: true
        },
        {
            text: 'Oldest',
            link: '/oldest'
        },
        {
            text: 'Random',
            link: '/random'
        },
        {
            text: 'Videos',
            link: '/videos'
        },
        {
            text: 'Skills',
            link: '/skills'
        },
        {
            text: 'Search',
            link: '/search'
        },
    ];
    
    const NavItems = !user ? 
        links.map((link, i)=>{
            return <NavItem 
                key={i} 
                text={link.text} 
                link={link.link} 
                exact={link.exact}
            />
        }) :
        [...links, {text: 'Favorites', link: '/favorites'}].map((link, i)=>{
            return <NavItem 
                key={i} 
                text={link.text} 
                link={link.link} 
                exact={link.exact}
            />
        }) 
        
    return (
        <ul className={styles.SideNav}>
            
            {   location.pathname.includes('detail') ? 
                <li className={styles.backBtn}>Back</li> : 
                <>
                    <h2>Orderd By</h2>
                    {NavItems}
                </>
            }
        </ul>
    );
}