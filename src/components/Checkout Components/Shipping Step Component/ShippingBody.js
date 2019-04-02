import React,{Component} from 'react';
import CheckoutSteps from '../CheckoutSteps';

class ShippingBody extends Component{

    render(){

        return(

           
                <div className="col-lg-9">
                    <CheckoutSteps/>
                    <h4>Choose Shipping Method</h4>
                    <hr className="padding-bottom-1x"/>
                    <div className="table-responsive">
                        <table className="table table-hover">
                            <thead className="thead-default">
                            <tr>
                                <th></th>
                                <th>Shipping Method</th>
                                <th>Delivery Time</th>
                                <th>Handling Fee</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td className="align-middle">
                                    <div className="custom-control custom-radio mb-0">
                                        <input className="custom-control-input" type="radio" id="courier" name="shipping-method" checked/>
                                        <label className="custom-control-label" for="courier"></label>
                                    </div>
                                </td>
                                <td className="align-middle"><span className="text-medium">Courier</span><br/><span className="text-muted text-sm">All Addresses</span></td>
                                <td className="align-middle">7 - 9 Days</td>
                                <td className="align-middle">$22.00</td>
                            </tr>
                            <tr>
                                <td className="align-middle">
                                    <div className="custom-control custom-radio mb-0">
                                        <input className="custom-control-input" type="radio" id="local" name="shipping-method"/>
                                        <label className="custom-control-label" for="local"></label>
                                    </div>
                                </td>
                                <td className="align-middle"><span className="text-medium">Local Shipping</span><br/><span className="text-muted text-sm">All Addresses</span></td>
                                <td className="align-middle">6 - 7 Days</td>
                                <td className="align-middle">$10.00</td>
                            </tr>
                            <tr>
                                <td className="align-middle">
                                    <div className="custom-control custom-radio mb-0">
                                        <input className="custom-control-input" type="radio" id="ups" name="shipping-method"/>
                                        <label className="custom-control-label" for="ups"></label>
                                    </div>
                                </td>
                                <td className="align-middle"><span className="text-medium">Ground Shipping</span><br/><span className="text-muted text-sm">All Addresses</span></td>
                                <td className="align-middle">2 - 4 Days</td>
                                <td className="align-middle">$18.00</td>
                            </tr>
                            <tr>
                                <td className="align-middle">
                                    <div className="custom-control custom-radio mb-0">
                                        <input className="custom-control-input" type="radio" id="global" name="shipping-method"/>
                                        <label className="custom-control-label" for="global"></label>
                                    </div>
                                </td>
                                <td className="align-middle"><span className="text-medium">Inspina Global</span><br/><span className="text-muted text-sm">All Addresses</span></td>
                                <td className="align-middle">3 - 4 days</td>
                                <td className="align-middle">$25.00</td>
                            </tr>
                            <tr>
                                <td className="align-middle">
                                    <div className="custom-control custom-radio mb-0">
                                        <input className="custom-control-input" type="radio" id="locker" name="shipping-method"/>
                                        <label className="custom-control-label" for="locker"></label>
                                    </div>
                                </td>
                                <td className="align-middle"><span className="text-medium">Inspina Locker</span><br/><span className="text-muted text-sm">All Addresses</span></td>
                                <td className="align-middle">2 - 5 days</td>
                                <td className="align-middle">$10.00</td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="checkout-footer margin-top-1x">
                        <div className="column"><a className="btn btn-outline-secondary" href="checkout-address.html"><i className="icon-arrow-left"></i><span className="hidden-xs-down">&nbsp;Back</span></a></div>
                        <div className="column"><a className="btn btn-primary" href="checkout-payment.html"><span className="hidden-xs-down">Continue&nbsp;</span><i className="icon-arrow-right"></i></a></div>
                    </div>
                </div>
               
             
       
        

        );
    }
}

export default ShippingBody;