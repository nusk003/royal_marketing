import React,{Component} from 'react';
import MainTopCats from './categories';
import PageHeader from '../PageHeader';
import Footer from '../Footer components/footer';
import Header from '../Header Components/header';
import loadScript from '../loadScripts';

class TopCategories extends Component{
componentWillMount(){

    const ls = new loadScript();
    ls.linkScripts();

    document.title = "Top Categories";
}
    render(){
        return(
        <div>
            <Header />
            <div className="offcanvas-wrapper">
			    <PageHeader name="Top Categories" bread="Top Categories" ></PageHeader>
                <MainTopCats />
                <Footer />
            </div>
        <a className="scroll-to-top-btn" href="#">
        <i className="icon-arrow-up"></i>
        </a>
        <div className="site-backdrop"></div>

        </div>

        );

    }
}

export default TopCategories;