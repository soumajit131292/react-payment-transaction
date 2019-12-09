import React, { Component } from 'react'
import {withRouter} from 'react-router-dom'
class Success extends Component {
    componentDidMount(){
        window.setTimeout(() => {
            this.props.history.push('/');
         }, 6000)
     
    }
    render() {
        return (
            <div>
                <h3>Payment is done successfully.</h3>
                <h5>Redirecting you to homepage.....</h5>
            </div>
        )
    }
}
export default withRouter(Success)