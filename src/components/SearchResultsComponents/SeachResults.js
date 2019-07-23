import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import queryString from 'query-string'

import Footer from '../Footer components/footer';
import Header from '../Header Components/header';
import loadScript from '../loadScripts';
import PageHeader from '../PageHeader';
import SearchContent from './SearchResultContent';
import {connect} from 'react-redux'
import * as actions from '../store/actions/index'


class SearchResults extends Component{

    state = {
        loading : true,
        results : [],
        activePage : 1,
        pageSize : 4
    }

    token = localStorage.getItem('token')

        componentDidMount() {
            
            const ls = new loadScript();
            ls.linkScripts();
        document.title = "Shop";
        const values = queryString.parse(this.props.location.search)
        this.props.onGetCategories()
        this.props.onProductSearch(this.state.activePage,this.state.pageSize,values.search)

        
        if(this.token == undefined){
            this.props.onGetCart()
        }
        else{
            this.props.onGetCart(this.token)
        }
        
      }

      componentWillReceiveProps (prevProps){

        const newvalues = queryString.parse(this.props.location.search)
        const oldvalues = queryString.parse(prevProps.location.search)
        
        if(newvalues.search != oldvalues.search){
            this.setState({activePage:1})
            this.props.onProductSearch(1,this.state.pageSize,oldvalues.search)

        }

      }


      onPageChange = (event,page) => {

        event.preventDefault()
        this.setState({activePage:page})
        const values = queryString.parse(this.props.location.search)    
        this.props.onProductSearch(page,this.state.pageSize,values.search)
      }

      

	render(){

		return(
        <div>    
        <PageHeader name="Serach Results" bread="Results"/>
       

            <SearchContent 
            {...this.props}
            productSearch = {this.props.productSearch}
            onPageChange = {(event,page)=>this.onPageChange(event,page)}
            activePage = {this.state.activePage}
            pageSize = {this.state.pageSize}
            getCategories ={this.props.getCategories}
            />

        
        
        
        </div>
		);
	}

}

const mapStateToProps = state => {
    return{
        getCart:state.getCart,
        productSearch : state.productSearch,
        getCategories : state.getCategories,
    }
}

const mapDispatchToProps = dispatch => {
    return{
        onGetCart : (token=null) => dispatch(actions.getCart(token)),
        onAddToCart : (token=null,product) => dispatch(actions.addToCart(token,product)),
        onProductSearch : (page,size,search) => dispatch(actions.productSearch(page,size,search)),
        onGetCategories : () => dispatch(actions.getCategories()),
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(SearchResults);