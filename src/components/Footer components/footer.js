import React, { Component } from 'react';

class Footer extends Component{

	render(){
        const {settings} = this.props

		return(
		    <footer className="site-footer">
        <div className="container">
            <div className="row">
                <div className="col-lg-3 col-md-6">
                    <section className="widget widget-light-skin">
                        <h3 className="widget-title">Royal Marketing</h3>
                        <p className="text-white"><i className="fa fa-phone"></i>{settings.phone}</p>
                        <p className="text-white"><i className="fa fa-envelope-o"></i>{settings.email}</p>
                        <p className="text-white"><i className="fa fa-map-marker"></i>{settings.address}</p>
                        
                        <a className="social-button shape-circle sb-facebook sb-light-skin" href={settings.facebook_url}>
                            <i className="socicon-facebook"></i>
                        </a>
                        <a className="social-button shape-circle sb-twitter sb-light-skin" href={settings.twitter_url}>
                            <i className="socicon-twitter"></i>
                        </a>
                        <a className="social-button shape-circle sb-instagram sb-light-skin" href={settings.instagram_url}>
                            <i className="socicon-googleplus"></i>
                        </a>
                       
                    </section>
                </div>
                
                {/* <div className="col-lg-3 col-md-6">
                    <section className="widget widget-links widget-light-skin">
                        <h3 className="widget-title">Our Services</h3>
                        <ul>
                            <li><a href="#">Creative Web Design</a></li>
                            <li><a href="#">Full Responsive Front-End</a></li>
                            <li><a href="#">Compatible For All Browsers</a></li>
                            <li><a href="#">W3C Walidated Code</a></li>
                            <li><a href="#">Amazing Supper Ideas</a></li>
                            <li><a href="#">50+ Different Pages</a></li>
                            <li><a href="#">Tested on Multiple Devices</a></li>
                        </ul>
                    </section>
                </div> */}
           
                {/* <div className="col-lg-3 col-md-6">
                    <section className="widget widget-links widget-light-skin">
                        <h3 className="widget-title">About Us</h3>
                        <ul>
                            <li><a href="#">Our Company</a></li>
                            <li><a href="#">Our Team</a></li>
                            <li><a href="#">Our Products</a></li>
                            <li><a href="#">Our Clients</a></li>
                            <li><a href="#">Our Testimonials</a></li>
                            <li><a href="#">24/7 Support</a></li>
                            <li><a href="#">Privacy Policy</a></li>
                        </ul>
                    </section>
                </div> */}
               
                {/* <div className="col-lg-3 col-md-6">
                    <section className="widget widget-links widget-light-skin">
                        <h3 className="widget-title">Account Info</h3>
                        <ul>
                            <li><a href="#">My Shopping Cart</a></li>
                            <li><a href="#">My Wishlist</a></li>
                            <li><a href="#">My Profile</a></li>
                            <li><a href="#">My Tickets</a></li>
                            <li><a href="#">My Orders</a></li>
                            <li><a href="#">Order Tracking</a></li>
                            <li><a href="#">Single Tickets</a></li>
                        </ul>
                    </section>
                </div> */}
            </div>
            <hr className="hr-light" />
            <p className="footer-copyright text-center">© {new Date().getFullYear()} Royal Marketing | All rights reserved</p>
        </div>
    </footer>
			);
	}

}

export default Footer;