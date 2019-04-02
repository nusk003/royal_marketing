import React, { Component } from 'react';

class Services extends Component{

	render(){

		return(
		<section className="container padding-top-3x padding-bottom-3x">
        <div className="row">
            <div className="col-md-3 col-sm-6 text-center home-cat">
                <img className="d-block w-90 img-thumbnail rounded-circle mx-auto mb-3" src="assets/images/services/01.png" alt="Shipping" />
                <h6>Free Shipping</h6>
                <p className="text-muted margin-bottom-none">On order over $200 ...</p>
            </div>
            <div className="col-md-3 col-sm-6 text-center home-cat">
                <img className="d-block w-90 img-thumbnail rounded-circle mx-auto mb-3"  alt="Money Back" />
                <h6>Money Back</h6>
                <p className="text-muted margin-bottom-none">Moneyback guarantee ...</p>
            </div>
            <div className="col-md-3 col-sm-6 text-center home-cat">
                <img className="d-block w-90 img-thumbnail rounded-circle mx-auto mb-3" src="assets/images/services/03.png" alt="Support" />
                <h6>24/7 Support</h6>
                <p className="text-muted margin-bottom-none">Online consultations ...</p>
            </div>
            <div className="col-md-3 col-sm-6 text-center home-cat">
                <img className="d-block w-90 img-thumbnail rounded-circle mx-auto mb-3" src="assets/images/services/04.png" alt="Payment" />
                <h6>Secure Payment</h6>
                <p className="text-muted margin-bottom-none">Safe Shopping Guarantee ...</p>
            </div>
        </div>
        </section>
			);
	}

}

export default Services;