import React from 'react'
import styles from './SideNav.module.css'
import NavItem from './NavItem/NavItem'

export default ()=>{
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
    ]
    const NavItems = links.map((link, i)=>{
        return <NavItem 
            key={i} 
            text={link.text} 
            link={link.link} 
            exact={link.exact}
        />
    })
    return (
        <ul className={styles.SideNav}>
            <h2>Orderd By</h2>
            {NavItems}
        </ul>
    )
}