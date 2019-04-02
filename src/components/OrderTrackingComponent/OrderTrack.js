import React,{Component} from 'react'
import Header from '../Header Components/header';
import PageHeader from '../PageHeader';
import OrderTrackContent from './OrderTrackContent';
import Footer from '../Footer components/footer';
import loadScript from '../loadScripts';

class OrderTrack extends Component{
    componentWillMount() {
        const ls = new loadScript();
        ls.linkScripts();
    document.title = "Tracking Order"
  }
    render(){

        return(

            <div>    
            <Header/>    
            <div className="offcanvas-wrapper">
            <PageHeader name="Order Tracking" bread="Order Tracking"/>
            <OrderTrackContent/>
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

export default OrderTrack;