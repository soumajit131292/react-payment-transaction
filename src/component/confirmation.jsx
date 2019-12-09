import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { Button } from '@material-ui/core';
import {paymentContinue}  from '../../src/controller/paymentController'

class Confirmation extends Component {
    constructor(props) {
        super(props)
        this.state = {
            paymentId: '',
            token: '',
            PayerID: ''
        }
    }
    handleClickContinue = () => {
        const query = new URLSearchParams(this.props.location.search);
        console.log('payment', query.get('paymentId'))
        paymentContinue(query.get('paymentId'), query.get('PayerID'), query.get('token')).then((res) => {
            console.log(res.data)
            this.props.history.push('/paymentsuccess')
        })
    }
    handleClickCancel=()=>{
        this.props.history.push('/')
    }
    render() {
        return (
            <div>
                <Button onClick={this.handleClickCancel} color="primary" variant="contained">Cancel</Button>
                <Button onClick={this.handleClickContinue} color="primary" variant="contained">Continue</Button>
            </div>
        )
    }
}
export default withRouter(Confirmation)