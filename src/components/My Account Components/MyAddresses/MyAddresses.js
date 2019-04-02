import React,{Component} from 'react';
import Header from '../../Header Components/header';
import MyAddressesContent from './MyAddressesContent';
import loadScript from '../../loadScripts';
import MyOrders from '../MyOrders/MyOrdersBody';


class MyAddresses extends Component{
    componentWillMount() {
        const ls = new loadScript();
        ls.linkScripts();
    document.title = "My Addresses"
  }

    render(){

       
        return(
            <div>
            <Header/>
            <div className="offcanvas-wrapper">
            <MyAddressesContent/>
            </div>
            <a className="scroll-to-top-btn" href="#">
            <i className="icon-arrow-up"></i>
            </a>
            <div className="site-backdrop"></div>
            </div>
        );
    }
}

export default MyAddresses;