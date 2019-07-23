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
          
			    <PageHeader name="Top Categories" bread="Top Categories" ></PageHeader>
                <MainTopCats />
                <Footer />
        

        </div>

        );

    }
}

export default TopCategories;