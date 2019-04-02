import React,{Component} from 'react'
import Header from '../../Header Components/header';
import PageHeader from '../../PageHeader';
import FinalContent from './FinalContent';
import Footer from '../../Footer components/footer';
import loadScript from '../../loadScripts';

class FinalCheckout extends Component{
    componentWillMount() {
        const ls = new loadScript();
        ls.linkScripts();
    document.title = "Checkout Complete"
  }
    render(){

        return(

            <div>    
            <Header/>    
            <div className="offcanvas-wrapper">
            <PageHeader name="Checkout Complete" bread="Checkout Complete"/>
            <FinalContent/>
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

export default FinalCheckout;