import React,{Component} from 'react';

import MyOrdersBody from '../My Account Components/MyOrders/MyOrdersBody'
import MyProfileBody from '../My Account Components/MyProfile/MyProfileBody'
import Sidebar from './Sidebar'
import PageHeader from '../PageHeader'
import MyAddressesBody from '../My Account Components/MyAddresses/MyAddressesBody'
import Footer from '../Footer components/footer'
import Header from '../Header Components/header'
import loadScript from '../loadScripts';
import {Switch,BrowserRouter as Router , Route} from 'react-router-dom'
import PageNotFoundContent from '../404 Not Found Components/PageNotFoundContent'

import {connect} from 'react-redux'
import * as actions from '../store/actions/index'

class MyAccount extends Component{

    token = localStorage.getItem('token')

    componentWillMount() {
        if(this.token != undefined){
            this.props.onGetProfile(this.token)
            this.props.onGetMyOrders(this.token)
        }
        const ls = new loadScript();
        ls.linkScripts();
    document.title = "My Profile"
  }

    render(){

       
        return(
            <div>
             
            <div className="offcanvas-wrapper">
              
            <PageHeader name="My Account" bread="My Account"/>
            <div className="container padding-top-1x padding-bottom-3x">
            <div className="row">
            <Sidebar {...this.props}/>
            <Switch>
                <Route path="/account/orders" component = {() => <MyOrdersBody {...this.props} />} />
                <Route path="/account/profile" component = {() => <MyProfileBody {...this.props} />} />
                <Route path="/account/address" component = {() => <MyAddressesBody {...this.props} />} />
                <Route component = {()=><div className="col-lg-9 col-md-9 col-xs-12"><PageNotFoundContent/></div>}/>
            </Switch>
            
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
        name : state.name,
        getMyOrders : state.getMyOrders,
        editAddress : state.editAddress,
        deleteAddress : state.deleteAddress,
        createAddress : state.createAddress,
     }
}

const mapDispatchToProps = dispatch => {
    return {
        onGetProfile : (token) => dispatch(actions.getProfile(token)),
        onUpdateName : (token,name) => dispatch(actions.updateName(token,name)),
        onGetMyOrders : (token) => dispatch(actions.getMyOrders(token)),
        onEditAddress : (token,id,address) => dispatch(actions.editAddress(token,id,address)),
        onDeleteAddress : (token,id) => dispatch(actions.deleteAddress(token,id)),
        onCreateAddress : (token,address) => dispatch(actions.createAddress(token,address)),

    }
}
export default connect(mapStateToProps,mapDispatchToProps)(MyAccount);