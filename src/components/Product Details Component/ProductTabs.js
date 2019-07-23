import React,{Component} from 'react';
import ProductDescription from './ProductDescription';
import Reviews from './Reviews';

class ProductTabs extends Component{

    render(){

        return(

            <div className="col-md-12">
                        <ul className="nav nav-tabs" role="tablist">
                            <li className="nav-item"><a className="nav-link active" href="#description" data-toggle="tab" role="tab">Description</a></li>
                            {/* <li className="nav-item"><a className="nav-link" href="#reviews" data-toggle="tab" role="tab">Reviews</a></li> */}
                        </ul>
                        <div className="tab-content">
                           <ProductDescription description = {this.props.getProDetails.details.description}/>
                            {/* <Reviews createReview={(token,review)=>this.props.onCreateReview(token,review)} reviews = {this.props.getProDetails.details.reviews}/> */}
                        </div>
                    </div>

        );
    }
}

export default ProductTabs;