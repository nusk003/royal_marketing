import React,{Component} from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'

import HomeContent from './components/Home Components/Home';
import Cart from './components/Cart Components/Cart';
import TopCategories from './components/Top Category Components/TopCategories';
import ShopContentGrid from './components/Shop Grid components/ShopGrid';
import ShopContentList from './components/Shop List Components/ShopList';
import ProductDetails from './components/Product Details Component/ProductDetails';
import ScrollTop from './components/ScrollTop';
import MyAccount from './components/My Account Components/MyAccount';
import Login from './components/Login Component/Login';
import OrderTrack from './components/OrderTrackingComponent/OrderTrack';
import PageNotFound from './components/404 Not Found Components/PageNotFound';
import * as actions from './components/store/actions/index'

import {connect} from 'react-redux'
import Checkout from './components/Checkout Components/Checkout';
import SearchResults from './components/SearchResultsComponents/SeachResults';
import Header from './components/Header Components/header'
import AboutUs from './components/AboutUs components/AboutUs';

class App extends Component{
	setCart = () => {
		if(localStorage.getItem('cart') == undefined ){

			const cart = {
				totalPrice: 0,
				count : 0,
				isDeliveryFree : null,
				deliveryCharge : 0,
				totalSavings : 0,
				CartProducts :[]
			}

			localStorage.setItem('cart',JSON.stringify(cart))
		}
	}

	setCheckout = () => {
		if(localStorage.getItem('checkout') == undefined){
			const checkout = {
				deliverAddress:null,
				deliverCharge: null,
				promoCode : null,
				paymentMethod : null,

			}

			localStorage.setItem('checkout',JSON.stringify(checkout))
		}
	}
	componentWillMount(){

		this.props.onTryAutoSignUp()
		this.setCart()
		this.setCheckout()
		this.getProfile()
		this.getCart()
		this.props.onGetCategories()

	}

	getCart = async () => {
		if (localStorage.getItem('token') == undefined){
			this.props.onGetCart()
		}
		else{
			this.props.onGetCart(localStorage.getItem('token'))
		}
	}

	getProfile = () => {
		if (localStorage.getItem('token') != undefined){
			this.props.onGetProfile(localStorage.getItem('token'))
		}
		
	}

	componentWillReceiveProps (prevProps) {

		if(this.props.getCart.totalPrice != prevProps.getCart.totalPrice && this.props.getCart.totalPrice == 0 ){

			this.getCart()

		}

	}

	render(){

		return(
			
			<Router>
				<div>
				<Header {...this.props}/>
				<ScrollTop>
					<Switch>
						<Route exact path="/" component={HomeContent } />
						<Route path="/home" component={HomeContent } />
						<Route path="/cart" component={Cart } />
						<Route path="/tc" component={TopCategories} />
						<Route  path="/:title/cid/:cid" component={ShopContentGrid} />
						<Route path="/:title/bid/:bid" component={ShopContentGrid} />
						<Route path="/:title/pcid/:pcid" component={ShopContentGrid} />
						<Route path="/aboutus" component={AboutUs} />

						<Route path="/:title/prid/:id" component={ProductDetails} />
						<Route path="/account/" component={MyAccount} />
						<Route path="/results/" component={SearchResults}/>
	
						<Route path="/login" component={Login} />
						{ !this.props.IsAuthenticated && !this.props.loading?
						<div>
							<Route path="/checkout/" component={Login} />
							
							<Route path="/trackorder" component={Login} />

							<Route component={PageNotFound}/>


						</div>
						:
						<div>
							<Route path="/checkout/" component={Checkout} />
							
							<Route path="/trackorder" component={OrderTrack} />

							<Route component={PageNotFound}/>

						</div>
						
						}
						
						<Route component={PageNotFound}/>
					</Switch>
				</ScrollTop>
						</div>
			</Router>
			
			);
	}
}

const mapStateToProps = state => {
	return{
		IsAuthenticated : state.auth.token != null,
		loading : state.auth.loading,
		getCart : state.getCart,
		getCategories : state.getCategories,
		getProfile : state.getProfile
	}
}

const mapDispatchToProps = dispatch => {
	return {
		onTryAutoSignUp : () => dispatch(actions.autoCheckState()),
		onGetCart : (token=null) => dispatch(actions.getCart(token)),
		onGetCategories : () => dispatch(actions.getCategories()),
		onGetProfile : (token) => dispatch(actions.getProfile(token)),
		onLogout : () => dispatch(actions.authLogout()),
	}
}

export default connect(mapStateToProps,mapDispatchToProps)(App)



