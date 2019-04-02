import React,{Component} from 'react'
import Header from '../../Header Components/header';
import PageHeader from '../../PageHeader';
import ReviewContent from './ReviewContent';
import Footer from '../../Footer components/footer';
import loadScript from '../../loadScripts';

class ReviewCheckout extends Component{
    componentWillMount() {
        const ls = new loadScript();
        ls.linkScripts();
    document.title = "Checkout Review"
  }
    render(){

        return(
            <div>    
            <Header/>   
            <div className="offcanvas-wrapper">
            <PageHeader name="Checkout Review" bread="Checkout Review"/>
            <ReviewContent/>
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


export default ReviewCheckout;