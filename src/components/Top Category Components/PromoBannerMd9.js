import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class PromoBannerMd9 extends Component {

	

	render(){

		return(
			<div className="alert alert-image-bg alert-dismissible fade show text-center mb-30 alert-img">
                    <span className="alert-close text-white" data-dismiss="alert"></span>
                    <div className="h3 text-medium text-white padding-top-1x padding-bottom-1x">
                        <i className="fa fa-bell alert-fa"></i> Lorem Ipsum is simply dummy text of the ...
                        <div className="mt-3 hidden-xl-up"></div><a className="btn btn-primary" href="shop-grid-1.html">View Offers</a>
                    </div>
             </div>

			);
	}
}

export default PromoBannerMd9;