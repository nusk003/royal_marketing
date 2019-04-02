import React,{Component} from 'react';

class ProductDescription extends Component{

    render(){

        return(

            <div className="tab-pane fade show active" id="description" role="tabpanel">
            <p>{this.props.description}</p>
            
        </div>

        );
    }
}

export default ProductDescription;