import React,{Component} from 'react';
import ProductCard from '../Home Components/ProductCard';
import Slider from "react-slick";


class RelatedProducts extends Component{

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

        const {products} = this.props
        
		return(
        <div>
		<h3 className="text-center padding-top-3x mb-30">Related Products</h3>
        <Slider {...settings}>
            
            {products.map((product,i)=>
                <div className="grid-item" key={i}>
                <ProductCard
                
                    product = {product}
                    onAddtoCart = {(token=null,product)=>this.props.onAddtoCart(token,product)}
                    getCart = {this.props.getCart}
                    onGetCart = { (token=null) => this.props.onGetCart(token) }

                />
                </div>
                
                )}
            
        </Slider>  
</div>

			);
	}
}

export default RelatedProducts;