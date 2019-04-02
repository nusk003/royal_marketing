import React,{Component} from 'react'
import Header from '../Header Components/header';
import PageNotFoundContent from './PageNotFoundContent';
import Footer from '../Footer components/footer';
import loadScript from '../loadScripts';

class PageNotFound extends Component{

    componentWillMount() {
        
        const ls = new loadScript();
        ls.linkScripts();

      document.title = "Online Electrical Store "
    }
    render(){

        return(
            <div>    
            <div className="offcanvas-wrapper">
            <PageNotFoundContent/>
            <Footer/>
            </div>
            <a className="scroll-to-top-btn" href="#">
            <i className="icon-arrow-up"></i>
            </a>
             <div className="site-backdrop"></div>
            </div>

        )

    }

}

export default PageNotFound;