import React, {Fragment, Component} from 'react'
import Nav from '../../components/Nav/Nav'
import SideNav from '../../components/SideNav/SideNav'
import styles from './Layout.module.css'
import Modal from '../../components/Modal/Modal'

class Layout extends Component{
    state={
        login: false
    }
    render(){
        return(
            <Fragment>
                <Nav login={()=>this.setState({login:!this.login})}/>
                <main className={styles.content}>
                    <SideNav/>
                    <section className={styles.Section}>
                        {this.props.children}
                    </section>
                </main>
                {this.state.login && 
                    <Modal close={()=>this.setState({login:false})}>
                        Test
                    </Modal>
                }
            </Fragment>
        )
    }
}

export default Layout