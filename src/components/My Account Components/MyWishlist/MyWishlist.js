import React,{Component} from 'react';
import Header from '../../Header Components/header';
import MyWishlistContent from './MyWishlistContent';
import loadScript from '../../loadScripts';
import MyOrders from '../MyOrders/MyOrdersBody';


class MyWishlist extends Component{
    componentWillMount() {
        const ls = new loadScript();
        ls.linkScripts();
    document.title = "My Wishlist"
  }

    render(){

       
        return(
            <div>
            <Header/>
            <div className="offcanvas-wrapper">
            <MyWishlistContent/>
            </div>
            <a className="scroll-to-top-btn" href="#">
            <i className="icon-arrow-up"></i>
            </a>
            <div className="site-backdrop"></div>
            </div>
        );
    }
}

export default  MyWishlist ;