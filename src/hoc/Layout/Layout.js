import React, {Fragment, Component} from 'react'
import Nav from '../../components/Nav/Nav'

class Layout extends Component{
    render(){
        return(
            <Fragment>
                <Nav/>
                <main>
                    {this.props.children}
                </main>
            </Fragment>
        )
    }
}

export default Layout