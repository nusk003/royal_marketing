import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PageHeader from '../PageHeader';
import Header from '../Header Components/header';
import Footer from '../Footer components/footer';
import loadScript from '../loadScripts';
import ProductContent from './ProductContent';
import {connect} from 'react-redux'
import * as actions from '../store/actions/index'

class ProductDetails extends Component{
	
        componentWillMount() {
		
		this.props.onGetProDetails(this.props.match.params.id)
		this.props.onGetPopularBrands()
		
        const ls = new loadScript();
        ls.linkScripts();
		
		document.title = "ProductDetails";
		
	  }
	  
	  componentDidMount(){
		
		

		setTimeout(()=>{

			if(this.props.getProDetails.error != null || this.props.getProDetails.details == null){
				this.props.history.push('/home')
			}

		},200)
		
		
	  }

	  componentDidUpdate (prevProps) {

		if(this.props.match.params != prevProps.match.params){
			this.props.onGetProDetails(this.props.match.params.id)
		}

	  }

	  


	render(){
		
		return(
			<div>
			<div className="offcanvas-wrapper">
			<PageHeader name="Product Details" bread="Product Details" ></PageHeader>
			<ProductContent {...this.props}/>
        	<Footer/>
        	</div>
        	<a className="scroll-to-top-btn" href="#">
        	<i className="icon-arrow-up"></i>
        	</a>
         	<div className="site-backdrop"></div>

			</div>


			);
	}
}

const mapStateToProps = state =>{
	return{
		getProDetails : state.getProDetails,
		getCart : state.getCart,
		popularBrands : state.popularBrands,
	}
}

const mapDispatchToProps = dispatch => {
	return {
		onGetProDetails : id => dispatch(actions.getProDetails(id)),
		onGetCart : (token=null) => dispatch(actions.getCart(token)),
		onAddtoCart : (token,product) => dispatch(actions.addToCart(token,product)),
		onGetPopularBrands : () => dispatch(actions.fetchPopBrand()),
		onCreateReview : (token,review) => dispatch(actions.createReview(token,review))
	}
}

export default connect(mapStateToProps,mapDispatchToProps)(ProductDetails);