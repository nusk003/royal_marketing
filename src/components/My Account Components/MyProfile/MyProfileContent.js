import React,{Component} from 'react';
import Sidebar from '../Sidebar';
import MyProfileBody from './MyProfileBody';
import Footer from '../../Footer components/footer';
import PageHeader from '../../PageHeader';

class MyAccountContent extends Component{
    
    render(){

        return(
         <div>   
        <PageHeader name="My Profile" bread="My Profile"/>
        <div className="container padding-top-1x padding-bottom-3x">
            <div className="row">
            <Sidebar/>
            <MyProfileBody/>
            </div>
        </div>
        <Footer/>
        </div>
        );
    }
}

export default MyAccountContent;