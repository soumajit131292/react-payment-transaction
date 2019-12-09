import React, { Component } from 'react'
import {withRouter} from 'react-router-dom'
import TextField from '@material-ui/core/TextField';
import { Button } from '@material-ui/core';
import {paymentController} from '../../src/controller/paymentController'
import { Redirect } from 'react-router';

class Checkout extends Component {
    constructor(props){
        super(props)
        this.state={
            price : '',
            url:''
        }
    }
    onChangePrice=(event)=>{
        this.setState({
            price:event.target.value 
        })
    }
    handleClick=()=>{
        console.log("price",this.state.price)
        paymentController(this.state.price).then((res)=>{
console.log("res",res.data.redirect_url)
this.setState({
    url:res.data.redirect_url
})
 window.location.href = this.state.url
//Response.redirect(this.state.url)
// return <Redirect to={this.state.url}  />
        })
    }

    render() {
        console.log("id",this.props.match.params.paymentId)
        const query = new URLSearchParams(this.props.location.search); console.log(query.get('paymentId'))
        return (
            <div>
                <div>Enter the price
                <TextField
                                    // className="password"
                                    required
                                    // id="password"
                                    label="price"

                                    type="text"
                                    margin="normal"
                                    variant="outlined"
                                    value={this.state.price}
                                    onChange={this.onChangePrice}


                                />
                                </div>
                                <div>
                                <Button onClick={this.handleClick}color="primary" variant="contained">Proceed</Button>
                               </div>
                
                                
            </div>
        )
    }
}
export default withRouter(Checkout)