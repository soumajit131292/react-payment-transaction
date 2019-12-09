import React from 'react';
import logo from './logo.svg';
import { BrowserRouter as Router, Route,Switch } from "react-router-dom";
import './App.css';
import Checkout from '../src/component/checkout'
import Confirmation from '../src/component/confirmation'
import Success from '../src/component/success'
function App() {
  return (
    
      
      <Router>
        {/* confirmation?paymentId=PAYID-LXW5XIY1EK93163XN366791V&token=EC-7YM454839E533393N&PayerID=NG6ZRLVV3DQ4W
        ?status=:status&page=:page&limit=:limit */}
        <Route path="/" exact component={Checkout}></Route>
        <Route path="/confirmation" component={Confirmation}></Route>
        <Route path="/paymentsuccess" component={Success}></Route>
      
      </Router>
    );
  }
  


export default App;
