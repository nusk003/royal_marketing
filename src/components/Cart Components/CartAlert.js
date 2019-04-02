import React,{Component} from 'react';

class CartAlert extends Component{

	render(){

		return(

			 <div className="alert alert-info alert-dismissible fade show text-center margin-bottom-1x"><span className="alert-close" data-dismiss="alert"></span>
            <p><i className="fa fa-bell"></i> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the ...</p>
        </div>  


			);
	}
}

export default CartAlert;