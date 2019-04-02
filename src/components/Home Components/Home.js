import React, { Component } from 'react';
import HomeSlider from './HomeSlider';
import TopCat from './TopCats';
import FeaturedProducts from './featurePro';
import PopularBrands from './PopularBrands';
import Services from './Services';
import Footer from '../Footer components/footer';
import Header from '../Header Components/header';
import loadScript from '../loadScripts';
import * as actions from '../store/actions/index'
import {connect} from 'react-redux'





class HomeContent extends Component{

    
        constructor(props){
            super(props)
            const ls = new loadScript();
            ls.linkScripts();
        }
        componentWillMount() {
            
            document.title = "Royal Marketing"
            
            this.props.onGetHeroSlider()
      }

     

	render(){

		return(
        <div>    
		<div className="offcanvas-wrapper">
        {!this.props.getHeroSlider.loading ?
            <HomeSlider slides = {this.props.getHeroSlider.slides} />
        :

        null

        }
        
        <TopCat {...this.props}/>
        <FeaturedProducts {...this.props} />
        <PopularBrands {...this.props} />
        <Services/>
        <Footer/>
        </div>
        <a className="scroll-to-top-btn" href="#">
        <i className="icon-arrow-up"></i>
        </a>
         <div className="site-backdrop"></div>

        </div>
		);
	}

}

const mapStateToProps = (state) => {

    return {
        topCat : state.topCat,
        featurePro : state.featurePro,
        popularBrands : state.popularBrands,
        addToCart : state.addToCart,
        getCart : state.getCart,
        getHeroSlider : state.getHeroSlider,
    }
}

const mapDispatctToProps = dispatch =>{
   return{
       onFetchTopCats : () => dispatch(actions.fetchTopCats()),
       onFetchFeaPro : (vendor) => dispatch(actions.fetchFeaPro(vendor)),
       onFetchPopBrands : () => dispatch(actions.fetchPopBrand()),
       onAddToCart : (token=null,product) =>dispatch(actions.addToCart(token,product)),
       onGetHeroSlider : () => dispatch(actions.getHeroSlider()),
   } 
}

export default connect(mapStateToProps,mapDispatctToProps)(HomeContent);