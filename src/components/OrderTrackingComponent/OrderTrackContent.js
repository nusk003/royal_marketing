import React,{Component} from 'react'

class OrderTrackContent extends Component{

    render(){

        return(

            <div className="container padding-top-1x padding-bottom-3x">
            <div className="card mb-3">
                <div className="p-4 text-center text-white text-lg bg-dark rounded-top"><span className="text-uppercase">Tracking Order No - </span><span className="text-medium">25698547569</span></div>
                <div className="d-flex flex-wrap flex-sm-nowrap justify-content-between py-3 px-2 bg-secondary">
                    <div className="w-100 text-center py-1 px-2"><span className='text-medium'>Shipped Via:</span> Inspina Ground</div>
                    <div className="w-100 text-center py-1 px-2"><span className='text-medium'>Status:</span> Checking Quality</div>
                    <div className="w-100 text-center py-1 px-2"><span className='text-medium'>Expected Date:</span> JUNE 09, 2018</div>
                </div>
                <div className="card-body">
                    <div className="steps d-flex flex-wrap flex-sm-nowrap justify-content-between padding-top-2x padding-bottom-1x">
                        <div className="step completed">
                            <div className="step-icon-wrap">
                                <div className="step-icon"><i className="pe-7s-cart"></i></div>
                            </div>
                            <h4 className="step-title">Confirmed Order</h4>
                        </div>
                        <div className="step completed">
                            <div className="step-icon-wrap">
                                <div className="step-icon"><i className="pe-7s-config"></i></div>
                            </div>
                            <h4 className="step-title">Processing Order</h4>
                        </div>
                        <div className="step completed">
                            <div className="step-icon-wrap">
                                <div className="step-icon"><i className="pe-7s-medal"></i></div>
                            </div>
                            <h4 className="step-title">Quality Check</h4>
                        </div>
                        <div className="step">
                            <div className="step-icon-wrap">
                                <div className="step-icon"><i className="pe-7s-car"></i></div>
                            </div>
                            <h4 className="step-title">Product Dispatched</h4>
                        </div>
                        <div className="step">
                            <div className="step-icon-wrap">
                                <div className="step-icon"><i className="pe-7s-home"></i></div>
                            </div>
                            <h4 className="step-title">Product Delivered</h4>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        );
    }
}

export default OrderTrackContent;