import React, { Component } from 'react';
import Header from '../Header Components/header';
import loadScript from '../loadScripts';
import LoginContent from './LoginContent';



class HomeContent extends Component{

    componentWillMount() {
        const ls = new loadScript();
        ls.linkScripts();
        document.title = "Login"
    }

	render(){

		return(
        <div>    
		<div className="offcanvas-wrapper">
            <LoginContent/>
        </div>
        <a className="scroll-to-top-btn" href="#">
            <i className="icon-arrow-up"></i>
        </a>
         <div className="site-backdrop"></div>

        </div>
		);
	}

}

export default HomeContent;