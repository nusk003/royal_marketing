import React,{Component} from 'react';
import Sidebar from '../Sidebar';
import MyAddressesBody from './MyAddressesBody';
import Footer from '../../Footer components/footer';
import PageHeader from '../../PageHeader';

class MyAccountContent extends Component{
    
    render(){

        return(
         <div>   
        <PageHeader name="My Addresses" bread="My Addresses"/>
        <div className="container padding-top-1x padding-bottom-3x">
            <div className="row">
            <Sidebar/>
            <MyAddressesBody/>
            </div>
        </div>
        <Footer/>
        </div>
        );
    }
}

export default MyAccountContent;