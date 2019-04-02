import React,{Component} from 'react'
import Header from '../../Header Components/header';
import PageHeader from '../../PageHeader';
import PaymentContent from './PaymentContent';
import Footer from '../../Footer components/footer';
import loadScript from '../../loadScripts';

class PaymentCheckout extends Component{
    componentWillMount() {
        const ls = new loadScript();
        ls.linkScripts();
    document.title = "Checkout Payment"
  }
    render(){

        return(

            <div>    
            <Header/>   
            <div className="offcanvas-wrapper">
            <PageHeader name="Checkout Payment" bread="Checkout Payment"/>
            <PaymentContent/>
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

export default PaymentCheckout;