import React, {Fragment, Component} from 'react'

class Layout extends Component{
    render(){
        return(
            <Fragment>
                <div>Hi</div>
                <main>
                    {this.props.children}
                </main>
            </Fragment>
        )
    }
}

export default Layout