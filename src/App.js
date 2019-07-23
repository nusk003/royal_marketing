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
import ContactUs from './components/ContactComponents/ContactUs';
import Axios from 'axios';
import Footer from './components/Footer components/footer';
import { home, apiKey } from './components/store/actions/keys';

class App extends Component{
	state = {
		aboutUs : [],
		settings : {},
		active : '/home'
	}
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
		this.props.onGetCategories()

		this.getAboutUs()
		this.getSettings()
		this.props.onTryAutoSignUp()
		this.setCart()
		this.setCheckout()
		this.getProfile()
		this.getCart()
		this.props.onGetCategories()

	}

	getAboutUs = () => {
		Axios.get(`${home}/api/utills/about-us/`,{headers:{Authorization : apiKey}})
		.then(({data})=>{
			this.setState({aboutUs:data})
		})
	}

	getSettings = () => {
		Axios.get(`${home}/api/utills/app-settings/`,{headers:{Authorization:apiKey}})
		.then(({data})=>{
			this.setState({settings:data})
		})
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
				<Header {...this.props} settings = {this.state.settings} 
					active = {this.state.active}
					activeChange = {(value)=>this.setState({active:value})}
				/>
				<div>    
				<div className="offcanvas-wrapper">
				<ScrollTop>
					<Switch>
						<Route exact path="/" component={HomeContent } />
						<Route path="/home" component={HomeContent } />
						<Route  path="/:title/cid/:cid" component={ShopContentGrid} />
						<Route path="/:title/bid/:bid" component={ShopContentGrid} />
						<Route path="/:title/pcid/:pcid" component={ShopContentGrid} />
						<Route path="/aboutus" component={()=><AboutUs aboutUs = {this.state.aboutUs} />} />

						<Route path="/:title/prid/:id" component={()=><ProductDetails settings = {this.state.settings} />} />
						<Route path="/results/" component={SearchResults}/>
						<Route path="/contact/" component={()=><ContactUs settings = {this.state.settings}/>}/>	
						<Route component={PageNotFound}/>
					</Switch>
				</ScrollTop>
				<Footer settings = {this.state.settings}  />
        		</div>
        		<a className="scroll-to-top-btn" href="#">
        		<i className="icon-arrow-up"></i>
        		</a>
         		<div className="site-backdrop"></div>

        		</div>
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



