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
    componentDidMount = () => {
        setTimeout(()=>{
            const query = new URLSearchParams(this.props.location.search);
            console.log('payment', query.get('paymentId'))
            paymentContinue(query.get('paymentId'), query.get('PayerID'), query.get('token')).then((res) => {
                console.log(res.data)
                this.props.history.push('/paymentsuccess')
            },4000)
        })
       
    }
    handleClickCancel=()=>{
        this.props.history.push('/')
    }
    render() {
        return (
            <div>
                <h3>Please wait.Don during transaction..</h3>
            </div>
        )
    }
}
export default withRouter(Confirmation)