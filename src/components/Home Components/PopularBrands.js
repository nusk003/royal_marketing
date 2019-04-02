import React, { Component } from 'react';
//import OwlCarousel from 'react-owl-carousel2';
import Slider from "react-slick";

class PopularBrands extends Component{

    componentWillMount(){
    
        this.props.onFetchPopBrands()
        
    }
	render(){

        const settings = {
            dots: false,
            infinite: true,
            speed: 500,
            slidesToShow: 4,
            slidesToScroll: 4,
            initialSlide: 0,
            responsive: [
              {
                breakpoint: 1024,
                settings: {
                  slidesToShow: 3,
                  slidesToScroll: 3,
                  infinite: true,
                  dots: false
                }
              },
              {
                breakpoint: 600,
                settings: {
                  slidesToShow: 2,
                  slidesToScroll: 2,
                  initialSlide: 2
                }
              },
              {
                breakpoint: 480,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1
                }
              }
            ]
          };

		return(
		
        <section className="bg-faded padding-top-3x padding-bottom-3x">
            <div className="container">
                <h3 className="text-center mb-30">Popular Brands</h3>
                {!this.props.popularBrands.loading ? 
                    <Slider {...settings}>
                    {this.props.popularBrands.brand.map((brand,j)=>
                        <div key={j}><img className="d-block w-110 opacity-75 m-auto" src={brand.image} alt="Brands"/></div>
                        
                        )}
                        
                    
                    </Slider>
                    
                    :
                
                    null
                    
                }
          
            </div>
        </section>

			);
	}

}

export default PopularBrands;