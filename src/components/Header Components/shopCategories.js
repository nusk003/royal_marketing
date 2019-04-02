import React, { Component } from 'react';
import Top from './top';
import MobileMenu from './mobileMenu';
import { Link } from 'react-router-dom';
import CategoriesLI from './CategoriesLI';

class ShopCategoryMenu extends Component{

	render(){
        const {loading,categories} = this.props.getCategories
		return(

			<div className="offcanvas-container" id="shop-categories">
             <div className="offcanvas-header">
                 <h3 className="offcanvas-title">Shop Categories</h3>
             </div>
            {!loading ?
             <nav className="offcanvas-menu">
             <ul className="menu">
             <CategoriesLI categories={categories}/>
          
            </ul>
            </nav>
            :
            "loading"
            }
           
            </div>

			);
	}
}

export default ShopCategoryMenu;