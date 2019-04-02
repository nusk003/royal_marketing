import React,{Component} from 'react'

class FinalBody extends Component{

    render(){

        return(

            <div className="container padding-top-1x padding-bottom-3x">
        <div className="card text-center">
            <div className="card-body padding-top-2x">
                <h3 className="card-title">Thank You For Your Order!</h3>
                <p className="card-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                <p className="card-text">It is a long established fact that a reader will be distracted by the readable: <span className="text-medium">35ZX598LKJ</span></p>
                <p className="card-text">Many desktop publishing packages and web page editors now use.</p>
                <div className="padding-top-1x padding-bottom-1x">
                    <a className="btn btn-outline-secondary" href="shop-grid-1.html">Go Back Shopping</a>
                    <a className="btn btn-outline-primary" href="order-tracking.html"><i className="icon-location"></i>&nbsp;Track Order</a>
                </div>
            </div>
        </div>
    </div>

        );
    }
}
export default FinalBody;