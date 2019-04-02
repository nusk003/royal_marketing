import React,{Component} from 'react'
import CheckoutSteps from '../CheckoutSteps';
import {Link} from 'react-router-dom'

class ReviewBody extends Component{

    render(){

        return(

            <div className="col-lg-9">
                <CheckoutSteps/>
                <h4>Review Your Order</h4>
                <hr className="padding-bottom-1x"/>
                <div className="table-responsive shopping-cart">
                    <table className="table">
                        <thead>
                        <tr>
                            <th>Product Name</th>
                            <th className="text-center">Subtotal</th>
                            <th className="text-center">Edit</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td>
                                <div className="product-item">
                                    <a className="product-thumb" href="shop-single-1.html"><img src="assets/images/shop/cart/01.jpg" alt="Product"/></a>
                                    <div className="product-info">
                                        <h4 className="product-title">
                                            <a href="shop-single-1.html">iPhone X Black<small>x 1</small></a>
                                        </h4>
                                        <span><em>Size:</em> 64GB</span><span><em>Color:</em> Gold</span>
                                    </div>
                                </div>
                            </td>
                            <td className="text-center text-lg text-medium">$649.99</td>
                            <td className="text-center"><a className="btn btn-outline-primary btn-sm" href="cart.html">Edit</a></td>
                        </tr>
                        <tr>
                            <td>
                                <div className="product-item">
                                    <a className="product-thumb" href="shop-single-1.html"><img src="assets/images/shop/cart/02.jpg" alt="Product"/></a>
                                    <div className="product-info">
                                        <h4 className="product-title">
                                            <a href="shop-single-1.html">Panasonic TX-32<small>x 1</small></a>
                                        </h4>
                                        <span><em>Size:</em> 180SM</span><span><em>Color:</em> Silver</span>
                                    </div>
                                </div>
                            </td>
                            <td className="text-center text-lg text-medium">$800.00</td>
                            <td className="text-center"><a className="btn btn-outline-primary btn-sm" href="cart.html">Edit</a></td>
                        </tr>
                        <tr>
                            <td>
                                <div className="product-item">
                                    <a className="product-thumb" href="shop-single-1.html"><img src="assets/images/shop/cart/03.jpg" alt="Product"/></a>
                                    <div className="product-info">
                                        <h4 className="product-title">
                                            <a href="shop-single-1.html">Sony HDR-AS50R<small>x 1</small></a>
                                        </h4>
                                        <span><em>Size:</em> 20MP</span><span><em>Color:</em> Black</span>
                                    </div>
                                </div>
                            </td>
                            <td className="text-center text-lg text-medium">$549.00</td>
                            <td className="text-center"><a className="btn btn-outline-primary btn-sm" href="cart.html">Edit</a></td>
                        </tr>
                        </tbody>
                    </table>
                </div>
                <div className="shopping-cart-footer">
                    <div className="column"></div>
                    <div className="column text-lg">Total: <span className="text-medium">$1998.99</span></div>
                </div>
                <div className="row padding-top-1x mt-3">
                    <div className="col-sm-6">
                        <h5>Shipping to:</h5>
                        <ul className="list-unstyled">
                            <li><span className="text-muted">Client:</span>Tony Stark</li>
                            <li><span className="text-muted">Address:</span>221B Baker Street, London, UK</li>
                            <li><span className="text-muted">Phone:</span>+1 888 888 8888</li>
                        </ul>
                    </div>
                    <div className="col-sm-6">
                        <h5>Payment Method:</h5>
                        <ul className="list-unstyled">
                            <li><span className="text-muted">Credit Card:</span>**** **** **** 5216</li>
                        </ul>
                    </div>
                </div>
                <div className="checkout-footer margin-top-1x">
                    <div className="column hidden-xs-down"><a className="btn btn-outline-secondary" href="checkout-payment.html"><i className="icon-arrow-left"></i>&nbsp;Back</a></div>
                    <div className="column"><Link className="btn btn-primary" to="/checkout/complete">Complete Order</Link></div>
                </div>
            </div>
           
         
 

        );
    }
}

export default ReviewBody;