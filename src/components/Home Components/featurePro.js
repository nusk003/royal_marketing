import React, { Component } from 'react';
import ProductCard from './ProductCard';
import Slider from "react-slick";

class FeatureProduct extends Component{

    componentWillMount(){
 
        this.props.onFetchFeaPro(1)
       
        
    }
    

	render(){

        const settings = {
            dots: false,
            infinite: false,
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
		<section className="container padding-top-3x padding-bottom-3x">
        <h3 className="text-center mb-30">Featured Products</h3>
          {!this.props.featurePro.loading ?
        
            <Slider {...settings} >

               {this.props.featurePro.pro.map((product,i)=>
                   <div key={i}>
                       <ProductCard
                            product = {product}
                            addToCart = {this.props.addToCart}
                            onAddtoCart = { (token=null,product) => this.props.onAddToCart(token,product)}
                            getCart = {this.props.getCart}
                            onGetCart = { (token=null) => this.props.onGetCart(token) }

                       />                
                   </div>
               )}
            </Slider>
  
           : 
               null
           }
          

        </section>

			);
	}

}

export default FeatureProduct;