import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Footer from '../Footer components/footer';
import Header from '../Header Components/header';
import loadScript from '../loadScripts';
import PageHeader from '../PageHeader';
import ShopContent from './ShopContentList';



class HomeContent extends Component{

        componentWillMount() {
            const ls = new loadScript();
            ls.linkScripts();
        document.title = "Shop";
      }

	render(){

		return(
        <div>    
      
        <PageHeader name="Shop" bread="Shop"/>
        <ShopContent/>       

        </div>
		);
	}

}

export default HomeContent;