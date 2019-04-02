import React,{Component} from 'react'
import {NavLink} from 'react-router-dom'
class CheckoutSteps extends Component{
    state = {
        
    }
    render(){

        return(

            <div className="checkout-steps" style={{width:'100%'}}>
                
                <NavLink activeClassName="active" to="/checkout/payment">2. Payment</NavLink>
                <NavLink activeClassName="active" className="completed" to="/checkout/address"><span className="angle"></span><span className="step-indicator icon-circle-check"></span>1. Address</NavLink>
            </div>
        );
    }
}

export default CheckoutSteps;