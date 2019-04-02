import React,{Component} from 'react';
import Sidebar from '../Sidebar';
import MyWishlistBody from './MyWishlistBody';
import Footer from '../../Footer components/footer';
import PageHeader from '../../PageHeader';

class MyAccountContent extends Component{
    
    render(){

        return(
         <div>   
        <PageHeader name="My Wishlist" bread="My Wishlist"/>
        <div className="container padding-top-1x padding-bottom-3x">
            <div className="row">
            <Sidebar/>
            <MyWishlistBody/>
            </div>
        </div>
        <Footer/>
        </div>
        );
    }
}

export default MyAccountContent;