import React, { Component } from 'react';

import Footer from '../Footer components/footer';
import Header from '../Header Components/header';
import loadScript from '../loadScripts';
import PageHeader from '../PageHeader';
import SearchContent from '../SearchResultsComponents/SearchResultContent';
import {connect} from 'react-redux'
import * as actions from '../store/actions/index'

class HomeContent extends Component{

    state = {
        loading : true,
        results : [],
        activePage : 1,
        pageSize : 4,
        queryParam : "",
        catType : ""
    }

    token = localStorage.getItem('token')

        componentDidMount() {
            

            const ls = new loadScript();
            ls.linkScripts();
            document.title = "Shop";
            this.props.onGetCategories()
            if(this.props.match.params.cid != undefined){

                this.setState({queryParam : "catId="+this.props.match.params.cid ,catType:"cid"})
            }   

            if(this.props.match.params.bid != undefined){

                this.setState({queryParam : "brandId="+this.props.match.params.bid,catType:"bid"})


            }

            if(this.props.match.params.pcid != undefined){

                this.setState({queryParam : "proCatId="+this.props.match.params.pcid,catType:"pcid"})

            
            }

            if(this.props.match.params.offid != undefined){

                this.setState({queryParam:"prices__Offer__offerId="+this.props.match.params.offid,catType:"offid"})

            }

            setTimeout(()=>{
                this.props.onProductsForCategory(1,this.state.pageSize,this.state.queryParam)

            },100)


            if(this.token == undefined){
                this.props.onGetCart()
            }
            else{
                this.props.onGetCart(this.token)
            }

        
        
      }

      onPageChange = (event,page) => {

        event.preventDefault()
        this.setState({activePage:page})
        this.props.onProductsForCategory(page,this.state.pageSize,this.state.queryParam)
    }

    componentWillReceiveProps (prevProps) {

        if(prevProps.match.params.cid != undefined){

            if(prevProps.match.params.cid != this.props.match.cid){
            this.setState({queryParam : "catId="+prevProps.match.params.cid ,catType:"cid"})
        }   }

        if(prevProps.match.params.bid != undefined){

            if(prevProps.match.params.bid != this.props.match.bid){
                this.setState({queryParam : "brandId="+prevProps.match.params.bid ,catType:"bid"})
            }


        }

        if(prevProps.match.params.pcid != undefined){

            if(prevProps.match.params.pcid != this.props.match.pcid){
                this.setState({queryParam : "proCatId="+prevProps.match.params.pcid ,catType:"pcid"})
            }

        
        }

        if(prevProps.match.params.offid != undefined){

            if(prevProps.match.params.offid != this.props.match.offid){
                this.setState({queryParam : "prices__Offer__offerId="+prevProps.match.params.offid ,catType:"offid"})
            }

        }

       

           

        if(prevProps.match.params[''+this.state.catType] != this.props.match.params[''+this.state.catType]){
                setTimeout(()=>{
                    
                    this.props.onProductsForCategory(1,this.state.pageSize,this.state.queryParam)
                
    
                },100)    
                
            }


        
    
    }

	render(){

		return(
        <div>    
        <PageHeader name={this.props.match.params.title} bread="Shop"/>
        
        <SearchContent
            getCart = {this.props.getCart}
            productSearch = {this.props.productsForCategory}
            onPageChange = {(event,page)=>this.onPageChange(event,page)}
            activePage = {this.state.activePage}
            onAddToCart = {(token,product)=>this.props.onAddToCart(token,product)}
            pageSize = {this.state.pageSize}
            getCategories = {this.props.getCategories}
        />
    
        </div>
		);
	}

}

const mapStateToProps = state => {
    return{
        getCart:state.getCart,
        productSearch : state.productSearch,
        productsForCategory : state.productsForCategory,
        getCategories : state.getCategories,
    }
}

const mapDispatchToProps = dispatch => {
    return{
        onGetCart : (token=null) => dispatch(actions.getCart(token)),
        onAddToCart : (token=null,product) => dispatch(actions.addToCart(token,product)),
        onProductsForCategory : (page,size,cat) => dispatch(actions.productForCategory(page,size,cat)),
        onAddToCart : (token,product) => dispatch(actions.addToCart(token,product)),
        onGetCategories : () => dispatch(actions.getCategories()),
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(HomeContent);