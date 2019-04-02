import React, { Component } from 'react';
import {Link} from 'react-router-dom'

class HomeSlider extends Component{

	render(){

		return(

		<div className="hero-slider home-1-hero">
        <div className="owl-carousel large-controls dots-inside" data-owl-carousel='{"nav": true, "dots": true, "loop": true, "autoplay": true, "autoplayTimeout": 7000}'>
            {this.props.slides.map((slider,i)=>
                <div className="item" key={i}>
                <div className="container padding-top-3x">
                    <div className="row justify-content-center align-items-center">
                        <div className="col-lg-5 col-md-6 padding-bottom-2x text-md-left text-center hidden-md-down">
                            <div className="from-bottom">
                                <img className="d-inline-block w-150 mb-4" src={slider.vectorImage} alt="Puma" />
                                <div className="h2 text-body text-normal mb-2 pt-1">{slider.title}</div>
                                <div className="h2 text-body text-normal mb-4 pb-1">starting at <span className="text-bold">Rs.{slider.startPrice}</span></div>
                            </div>
                            <Link className="btn btn-primary scale-up delay-1" to={slider.link} >Shop Now</Link>
                        </div>
                        <div className="col-md-6 padding-bottom-2x mb-3">
                            <img className="d-block mx-auto" src={slider.mainImage} alt="Puma Backpack" />
                        </div>
                    </div>
                </div>
            </div>
                )}
           
            
        </div>
    </div>

			);
	}
}

export default HomeSlider;