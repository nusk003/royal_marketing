import React,{Component} from 'react';
import LoginBody from './LoginBody';
import Footer from '../Footer components/footer';
import PageHeader from '../PageHeader';

class LoginContent extends Component{
    
    render(){

        return(
         <div>   
        <PageHeader name="Login" bread="Login"/>
        <div className="container padding-top-1x padding-bottom-3x">
            <div className="row">
            <LoginBody/>
            </div>
        </div>
        <Footer/>
        </div>
        );
    }
}

export default LoginContent;