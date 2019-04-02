import React,{Component} from 'react';
import Sidebar from '../Sidebar';
import MyTicketsBody from './MyTicketsBody';
import Footer from '../../Footer components/footer';
import PageHeader from '../../PageHeader';

class MyAccountContent extends Component{
    
    render(){

        return(
         <div>   
        <PageHeader name="My Tickets" bread="My Tickets"/>
        <div className="container padding-top-1x padding-bottom-3x">
            <div className="row">
            <Sidebar/>
            <MyTicketsBody/>
            </div>
        </div>
        <Footer/>
        </div>
        );
    }
}

export default MyAccountContent;