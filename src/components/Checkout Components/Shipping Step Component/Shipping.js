import React,{Component} from 'react'
import PageHeader from '../../PageHeader';
import ShippingContent from './ShippingContent';
import Header from '../../Header Components/header';
import Footer from '../../Footer components/footer';
import loadScript from '../../loadScripts';


class ShippingCheckout extends Component{
    componentWillMount() {
        const ls = new loadScript();
        ls.linkScripts();
    document.title = "Checkout Shipping"
  }
    render(){

        return(

            <div>    
        <Header/>    
		<div className="offcanvas-wrapper">
        <PageHeader name="Checkout Shipping" bread="Checkout Shipping"/>
        <ShippingContent/>
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

export default ShippingCheckout;