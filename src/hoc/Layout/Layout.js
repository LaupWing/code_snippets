import React, {Fragment, Component} from 'react'
import Nav from '../../components/Nav/Nav'
import SideNav from '../../components/SideNav/SideNav'
import styles from './Layout.module.css'

class Layout extends Component{
    render(){
        return(
            <Fragment>
                <Nav/>
                <main className={styles.content}>
                    <SideNav/>
                    <section className={styles.Section}>
                        {this.props.children}
                    </section>
                </main>
            </Fragment>
        )
    }
}

export default Layout