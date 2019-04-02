import React,{Component} from 'react'
import PageHeader from '../PageHeader';
import Header from '../Header Components/header';
import Footer from '../Footer components/footer';
import loadScript from '../loadScripts';
import AddressBody from './Address Step Components/AddressBody';
import {Switch,BrowserRouter as Router, Route} from 'react-router-dom'
import Sidebar from './Sidebar';
import PaymentBody from './Payment Step Component/PaymentBody';
import * as actions from '../store/actions/index';

import {connect} from 'react-redux'
import VerticalLinearStepper from './Steps';

class Checkout extends Component{

    checkPromoCode = () => {
        if (localStorage.getItem('promoCode') != undefined){

            const promoCode = localStorage.getItem('promoCode')

                const cartTotal = this.props.getCart.totalPrice

                if(localStorage.getItem('token') != undefined){
                
                    this.props.onApplyPromoCode(localStorage.getItem('token'),cartTotal,promoCode)
                }
                else{
    
                    this.props.onApplyPromoCode(null,cartTotal,promoCode)
    
                }
        }
    }

    setPromoCodeToCheckout = () => {
        if(localStorage.getItem('promoCode') != undefined){
            const checkout = JSON.parse(localStorage.getItem('checkout'))
            checkout.promoCode = localStorage.getItem('promoCode')
            localStorage.setItem('checkout',JSON.stringify(checkout))
        }
    }

    componentWillMount() {
        console.log(this.props)
        setTimeout(()=>{
            this.props.onGetCart(localStorage.getItem('token'))
            this.props.onGetProfile(localStorage.getItem('token'))
            this.checkPromoCode()
        },500)
        setTimeout(()=>{
            this.setPromoCodeToCheckout()
        },700)
        const ls = new loadScript();
        ls.linkScripts();
        document.title = "Checkout"
    }

    componentDidMount () {
        if (this.props.getCart.count == 0) {

            this.props.history.push('/')
        }
    }

    

    render(){

        return(

        <div> 
               
		<div className="offcanvas-wrapper">
        <PageHeader name="Checkout Address" bread="Checkout"/>
        <div className="container padding-top-1x padding-bottom-3x">
        <div className="row">
        <div className="col-lg-9">
        <VerticalLinearStepper
            steps = {['Address','Payment']}
            {...this.props}
        />
        </div>
        <Sidebar {...this.props} />
        </div>
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
        getProfile : state.getProfile,
        createAddress : state.createAddress,
        editAddress : state.editAddress,
        deleteAddress : state.deleteAddress,
        applyPromoCode : state.applyPromoCode,
        createOrder : state.createOrder,
        getCart : state.getCart,

    }
}

const mapDispatchToProps = dispatch => {

    return {
        onGetProfile : (token) => dispatch(actions.getProfile(token)),
        onDeleteAddress : (token,id) => dispatch(actions.deleteAddress(token,id)),
        onEditAddress : (token,id,address) => dispatch(actions.editAddress(token,id,address)),
        onCreateAddress : (token,address) => dispatch(actions.createAddress(token,address)),
        onApplyPromoCode : (token,cartTotal,promoCode) => dispatch(actions.applyPromoCode(token,cartTotal,promoCode)),
        onCreateOrder : (token,order)=>dispatch(actions.createOrder(token,order)),
        onGetCart : (token=null) =>dispatch(actions.getCart(token)),
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Checkout);