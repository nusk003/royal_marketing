import React , { Component } from 'react';
import {Link,withRouter} from 'react-router-dom';
import Sidebar from './sidebar';
import Infinite from './InfiniteScroll';
import Pagination from './pagination';
import ProductCard from '../Home Components/ProductCard';
import { BeatLoader } from 'react-spinners';


class SearchContent extends Component{

    state = {
        activePage : 1,
        loading : true
    }

  
    render(){

        return(

           
            <div className="container padding-top-1x padding-bottom-3x">
                <div className="row">
                   
                    <div className="col-lg-9 order-lg-2">
                   
                        {!this.props.productSearch.loading ? 
                        <div>
                        <div className="col-md-12 row">
                            
                            
                            {this.props.productSearch.results.map((product,i)=>
                <div className="col-md-4" key={i}>
                    <ProductCard
                            product = {product}
                            addToCart = {this.props.addToCart}
                            onAddtoCart = { (token=null,product) => this.props.onAddToCart(token,product)}
                            getCart = {this.props.getCart}
                            onGetCart = { (token=null) => this.props.onGetCart(token) }
                       /> 
                </div>
                )}
                      </div>  
                        
                    <Pagination
                    
                        count = {this.props.productSearch.count}
                        size = {this.props.pageSize}
                        currentPage = {this.props.activePage}
                        onPageChange = {(event,page)=>this.props.onPageChange(event,page)}

                    />
                    
                    </div>
                        
                        :
                        <div className="col-md-12" style={{textAlign:'center',paddingTop:'10%'}}>
                            <BeatLoader
                            size ={50}
                            color = '#fd7e14'
                            />
                        </div>
                        }
                        
                        
                    </div>
                    
                    <Sidebar Categories = {this.props.getCategories}/>
               
                </div>
            </div>

   
        );
    }
}

export default SearchContent;