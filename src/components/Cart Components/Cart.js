import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PageHeader from '../PageHeader';
import Header from '../Header Components/header';
import Footer from '../Footer components/footer';
import CartContent from './CartContent';
import CartFooter from './CartFooter';
import RelatedProducts from './RelatedProducts';
import loadScript from '../loadScripts';
import * as actions from '../../components/store/actions/index'
import { connect } from 'react-redux'

class Cart extends Component{
  
    componentWillMount() {
        this.props.onTryAutoLogin()
          const ls = new loadScript();
          ls.linkScripts();

		document.title = "Shopping Cart";
		
	  }

	 

	render(){

		return(
			<div>
			
			<div className="offcanvas-wrapper">
			<PageHeader name="Shopping Cart" bread="Cart" ></PageHeader>
			<div className="container padding-top-1x padding-bottom-3x">
			{this.props.cart.count != 0 ?
			<div>
				<CartContent {...this.props}/>
				<CartFooter {...this.props}/>
			</div>
			:
			<div style={{textAlign:'center'}}>
				<h3>Your Cart is Empty</h3>
				<Link to="/home"><button className="btn btn-primary">Start Shopping</button></Link>
			</div>		
		
			}
			
			</div>
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

const mapStateToProps = state => {
	return {
		isAuthenticated : state.auth.token != null,
		cart : state.getCart,
		updateCart : state.updateCart,
		deleteCart : state.deleteCart, 
		applyPromoCode : state.applyPromoCode,
	}
}

const mapDispatchToProps = dispatch => {
	return  {
		onTryAutoLogin : () => dispatch(actions.autoCheckState()),
		onGetCart : (token=null) => dispatch(actions.getCart(token)),
		onUpdateQty : (token=null,cartPro,qty) => dispatch(actions.updateCart(token,cartPro,qty)),
		onDeleteCart : (token=null,cartPro) => dispatch(actions.deleteCart(token,cartPro)),
		onApplyPromoCode : (token=null,cartTotal,promoCode) => dispatch(actions.applyPromoCode(token,cartTotal,promoCode)),
	}
}



export default connect(mapStateToProps,mapDispatchToProps)(Cart);