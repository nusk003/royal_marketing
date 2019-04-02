import React, { Component } from 'react';
//import logo from '../assets/images/stargrab_logo.png'
//import Top from './top';
import { Link } from 'react-router-dom';
import CategoriesLI from './CategoriesLI';

class mobileMenu extends Component{

	render(){
        const {loading,categories} = this.props.getCategories
        const {getProfile} = this.props
        const token = localStorage.getItem('token')
		return(

            
			<div className="offcanvas-container" id="mobile-menu">
            {token != undefined ?
            !getProfile.loading ? 
                <a className="account-link" href="#">

                <div className="user-info">
                    <h6 className="user-name">Hi,{getProfile.profile.name}</h6>
                </div>
                </a>
            :
               "Loading..."
            
            :
            null
            }
    
    <nav className="offcanvas-menu">
        <ul className="menu">
            <li className="active" >
                <span>
                    <Link to="/home"><span>Home</span></Link>
                    <span className="sub-menu-toggle"></span>
                </span>                
            </li>
            
            <li className="has-children">
                <span>
                    <a href="#"><span>Shop</span></a>
                    <span className="sub-menu-toggle"></span>
                </span>

                <ul className="offcanvas-submenu">
                {!loading ?
                    <CategoriesLI categories={categories} />
                :
                "Loading"
                }
                
                </ul>
            </li>
            {token != undefined ?
                <li className="has-children">
                <span>
                    <a href="#">Account</a>
                    <span className="sub-menu-toggle"></span>
                </span>
                <ul className="offcanvas-submenu">
                    <li>
                    <span>
                    <Link to="/account/profile">My Profile</Link>
                    </span>
                        
                    </li>

                    <li>
                    <span>
                    <Link to = "/account/orders" >My Orders</Link>
                    </span>
                        
                    </li>

                    <li>
                    <span>
                    <Link to = "/account/address" >My Address</Link>
                    </span>
                        
                    </li>
                  
                </ul>
            </li>


            :   
            null 
            }
            {token == undefined ? 
            <li>
            <span>
                <Link to="/login"><span>Login / Register</span></Link>
            </span>                
        </li>
            :
            <li>
            <span>
                <Link to="/login"><span>Logout</span></Link>
            </span>                
        </li>
            }
            
            
        </ul>
    </nav>
</div>

			);
	}
}

export default mobileMenu;