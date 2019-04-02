import React,{Component} from 'react';
import Header from '../../Header Components/header';
import MyOrdersContent from './MyOrdersContent';
import loadScript from '../../loadScripts';


class MyOrders extends Component{
    componentWillMount() {
        const ls = new loadScript();
        ls.linkScripts();
    document.title = "My Orders"
  }

    render(){

       
        return(
            <div>
            <Header/>
            <div className="offcanvas-wrapper">
            <MyOrdersContent/>
            </div>
            <a className="scroll-to-top-btn" href="#">
            <i className="icon-arrow-up"></i>
            </a>
            <div className="site-backdrop"></div>
            </div>
        );
    }
}

export default MyOrders;