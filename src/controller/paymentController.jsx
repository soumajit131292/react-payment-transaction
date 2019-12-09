import React from 'react'
import axios from 'axios'
const headers={
    'Content-Type': 'application/json',
    'token':localStorage.getItem('token')
}

export function paymentController(price) {
    
        return axios.post('http://localhost:9090/paypal/make/payment?sum='+price,{ headers : headers})
    
}
export function paymentContinue(paymentId,PayerID,token) {
    console.log(PayerID)
    console.log('paymentOd',paymentId)
    return axios.post('http://localhost:9090/paypal/complete/payment?payerId='+PayerID+'&paymentId='+paymentId+'&token='+token,null,{ headers : headers})

}

