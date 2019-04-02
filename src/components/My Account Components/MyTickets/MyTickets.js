import React,{Component} from 'react';
import Header from '../../Header Components/header';
import MyTicketsContent from './MyTicketsContent';
import loadScript from '../../loadScripts';
import MyOrders from '../MyOrders/MyOrdersBody';


class MyTickets extends Component{
    componentWillMount() {
        const ls = new loadScript();
        ls.linkScripts();
    document.title = "My Tickets"
  }

    render(){

       
        return(
            <div>
            <Header/>
            <div className="offcanvas-wrapper">
            <MyTicketsContent/>
            </div>
            <a className="scroll-to-top-btn" href="#">
            <i className="icon-arrow-up"></i>
            </a>
            <div className="site-backdrop"></div>
            </div>
        );
    }
}

export default  MyTickets ;