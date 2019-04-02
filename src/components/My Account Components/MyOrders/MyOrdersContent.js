import React,{Component} from 'react';
import Sidebar from '../Sidebar';
import MyOrdersBody from './MyOrdersBody';
import Footer from '../../Footer components/footer';
import PageHeader from '../../PageHeader';

class MyAccountContent extends Component{
    
    render(){

        return(
         <div>   
        <PageHeader name="My Orders" bread="My Orders"/>
        <div className="container padding-top-1x padding-bottom-3x">
            <div className="row">
            <Sidebar/>
            <MyOrdersBody/>
            </div>
        </div>
        <Footer/>
        </div>
        );
    }
}

export default MyAccountContent;