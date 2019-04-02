import React,{Component} from 'react'
import Slider from 'react-slick'

class ProImageSlider extends Component{

    render(){
        return(
            
                            
                            <Slider >
                            {this.props.Images.map((image,i)=><div key={i} data-hash="one"><img src={image} alt="Product"/></div>)}
                                
                            </Slider>
                            
           
        );
    }

}

export default ProImageSlider