import React,{Component} from 'react'
import PaymentBody from './PaymentBody';
import Sidebar from '../Sidebar';

class PaymentContent extends Component{

    render(){

        return(
<div className="container padding-top-1x padding-bottom-3x">
        <div className="row">
        <PaymentBody/>
        <Sidebar/>
        </div>
        </div>

        );
    }
}

export default PaymentContent;