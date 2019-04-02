import React,{Component} from 'react'
import PageHeader from '../../PageHeader';
import AddressContent from './AddressContent';
import Header from '../../Header Components/header';
import Footer from '../../Footer components/footer';
import loadScript from '../../loadScripts';


class AddressCheckout extends Component{

    componentWillMount() {
        const ls = new loadScript();
        ls.linkScripts();
    document.title = "Checkout Address"
  }

    render(){

        return(

            <div>    
        <Header/>    
		<div className="offcanvas-wrapper">
        <PageHeader name="Checkout Address" bread="Checkout Address"/>
        <AddressContent/>
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

export default AddressCheckout;