import React, {Component} from 'react';
import logo from '../../assets/images/royal_m.png';
import Top from './top';
import MobileMenu from './mobileMenu';
import ShopCat from './shopCategories';
import { Link } from 'react-router-dom';
import Example from './autoSuggest';
import { withRouter } from "react-router-dom";


class Header extends Component{
    
    onLogout = (event) => {

        event.preventDefault()
        this.props.onLogout()
        this.props.history.push('/')
    }

	render(){
        const {getProfile} = this.props
        const token = localStorage.getItem('token')
        const {getCart} = this.props
		return(
		<div>
        
		<ShopCat {...this.props}/>
		<MobileMenu {...this.props} />
		<Top />
    	<header className="navbar navbar-sticky">
		<div className="site-search" method="get">
        <div style={{height:'100%'}}>
        <Example/>
        </div>
        <div className="search-tools">
            <span className="clear-search">Clear</span>
            <span className="close-search"><i className="icon-cross"></i></span>
        </div>
        </div>
        
        <div className="site-branding">
            <div className="inner">
                <a className="offcanvas-toggle cats-toggle" href="#shop-categories" data-toggle="offcanvas"></a>
                <a className="offcanvas-toggle menu-toggle" href="#mobile-menu" data-toggle="offcanvas"></a>
                <Link className="site-logo" to="/home"><img src={logo} width="50%"/></Link>
            </div>
        </div>
    
        <nav className="site-menu">
        <ul>
            <li className="active">
            	
            	<Link to="/home" > <span>Home</span> </Link>
            	
			
                <ul className="sub-menu">
                    <li className="active"><Link to="/home">Home Version 1</Link></li>
                    <li><a href="index-2.html">Home Version 2</a></li>
                    <li><a href="index-3.html">Home Version 3</a></li>
                </ul>
            </li>
            <li>
                <a href="#"><span>Shop</span></a>
                <ul className="sub-menu">
                    <li className="has-children">
                        <a href="#"><span>Shop Categories</span></a>
                        <ul className="sub-menu">
                            <li><a href="shop-categories-1.html">Categories Left Sidebar</a></li>
                            <li><a href="shop-categories-2.html">Categories Right Sidebar</a></li>
                            <li><a href="shop-categories-3.html">Categories No Sidebar</a></li>
                        </ul>
                    </li>
                    <li className="has-children">
                        <a href="#"><span>Shop Grid</span></a>
                        <ul className="sub-menu">
                            <li><a href="shop-grid-1.html">Shop Grid Left Sidebar</a></li>
                            <li><a href="shop-grid-2.html">Shop Grid Right Sidebar</a></li>
                            <li><a href="shop-grid-3.html">Shop Grid No Sidebar</a></li>
                        </ul>
                    </li>
                    <li className="has-children">
                        <a href="#"><span>Shop List</span></a>
                        <ul className="sub-menu">
                            <li><a href="shop-list-1.html">Shop List Left Sidebar</a></li>
                            <li><a href="shop-list-2.html">Shop List Right Sidebar</a></li>
                            <li><a href="shop-list-3.html">Shop List No Sidebar</a></li>
                        </ul>
                    </li>
                    <li className="has-children">
                        <a href="#"><span>Single Product</span></a>
                        <ul className="sub-menu">
                            <li><a href="shop-single-1.html">Single Product Left Sidebar</a></li>
                            <li><a href="shop-single-2.html">Single Product Right Sidebar</a></li>
                            <li><a href="shop-single-3.html">Single Product No Sidebar</a></li>
                        </ul>
                    </li>
                    <li className="has-children">
                        <a href="#"><span>Checkout</span></a>
                        <ul className="sub-menu">
                            <li><a href="checkout-address.html">Checkout Address</a></li>
                            <li><a href="checkout-shipping.html">Checkout Shipping</a></li>
                            <li><a href="checkout-payment.html">Checkout Payment</a></li>
                            <li><a href="checkout-review.html">Checkout Review</a></li>
                            <li><a href="checkout-complete.html">Checkout Complete</a></li>
                        </ul>
                    </li>
                    <li><Link to="/cart">Shopping Cart</Link></li>
                </ul>
            </li>
            <li>
                <a href="#"><span>About Us</span></a>
                <ul className="sub-menu">
                    <li><a href="account-login.html">Login & Register</a></li>
                    <li><a href="account-password-recovery.html">Password Recovery</a></li>
                    <li><a href="account-profile.html">Profile Page</a></li>
                    <li><a href="account-address.html">Shipping Address</a></li>
                    <li><a href="account-orders.html">My Orders</a></li>
                    <li><a href="account-wishlist.html">My Wishlist</a></li>
                    <li><a href="account-tickets.html">My Tickets</a></li>
                    <li><a href="account-single-ticket.html">Single Ticket</a></li>
                </ul>
            </li>
            <li>
                <a href="#"><span>Contact Us</span></a>
                <ul className="sub-menu">
                    <li className="has-children">
                        <a href="#"><span>Blog Layout</span></a>
                        <ul className="sub-menu">
                            <li><a href="blog-1.html">Blog Left Sidebar</a></li>
                            <li><a href="blog-2.html">Blog Right Sidebar</a></li>
                            <li><a href="blog-3.html">Blog No Sidebar</a></li>
                        </ul>
                    </li>
                    <li className="has-children">
                        <a href="#"><span>Single Post Layout</span></a>
                        <ul className="sub-menu">
                            <li><a href="blog-single-1.html">Post Left Sidebar</a></li>
                            <li><a href="blog-single-2.html">Post Right Sidebar</a></li>
                            <li><a href="blog-single-3.html">Post No Sidebar</a></li>
                        </ul>
                    </li>
                </ul>
            </li>
         {/*  <li>
                <a href="#"><span>Pages</span></a>
                <ul className="sub-menu">
                    <li><a href="about.html">About Us</a></li>
                    <li><a href="contacts.html">Contact Us</a></li>
                    <li><a href="team.html">Our Team</a></li>
                    <li><a href="faq.html">Support Page</a></li>
                    <li><a href="order-tracking.html">Order Tracking</a></li>
                    <li><a href="search-results.html">Search Results</a></li>
                    <li><a href="404.html">404 Page</a></li>
                    <li><a href="coming-soon.html">Coming Soon</a></li>
                </ul>
            </li>
            <li>
                <a href="#"><span>Shortcodes</span></a>
                <ul className="sub-menu">
                    <li><a href="accordions.html"><i className="fa fa-angle-right"></i> Accordions</a></li>
                    <li><a href="alerts.html"><i className="fa fa-angle-right"></i> Alerts</a></li>
                    <li><a href="buttons.html"><i className="fa fa-angle-right"></i> Buttons</a></li>
                    <li><a href="pagination.html"><i className="fa fa-angle-right"></i> Pagination</a></li>
                    <li><a href="steps.html"><i className="fa fa-angle-right"></i> Steps</a></li>
                    <li><a href="tabs.html"><i className="fa fa-angle-right"></i> Tabs</a></li>
                    <li><a href="progress-bars.html"><i className="fa fa-angle-right"></i> Progress Bar</a></li>
                    <li><a href="carousel.html"><i className="fa fa-angle-right"></i> Carousels</a></li>
                </ul>
         </li>*/}
        </ul>
    </nav>
   
    <div className="toolbar">
        <div className="inner">
            <div className="tools">
                <div className="search"><i className="icon-search"></i></div>
                {/*token != undefined ?
                    <div className="account">
                    <Link to="/account/profile"></Link><i className="icon-head"></i>

                    <ul className="toolbar-dropdown">
                        <li className="sub-menu-user">
                            {!getProfile.loading ?
                                <div className="user-info">
                                <h6 className="user-name">Hi,{getProfile.profile.name}</h6>
                                </div>
                            :
                                "Loading"
                            }
                            
                        </li>
                        <li><Link to="/account/profile">My Profile</Link></li>
                        <li><Link to="/account/orders">My Orders</Link></li>
                        <li><Link to="/account/wishlist">My Wishlist</Link></li>
                        <li className="sub-menu-separator"></li>
                        <li><Link to="" onClick={this.onLogout}><i className="fa fa-lock"></i> Sign Out</Link></li>
                    </ul>
                    </div>
                :

                    <div className="account">
                    <Link to = "/login"></Link><i className="icon-head"></i>
                    
                    <ul className="toolbar-dropdown">
                        
                        <li><Link to="/login"><i className="fa fa-lock"></i> Login / Register</Link></li>
                    </ul>
                    </div>

                        */}
                
                
                {/*<div className="cart">
                    <Link to="/cart"></Link>
                    <i className="icon-bag"></i>
                    <span className="count">{getCart.count}</span>
                    <span className="subtotal">Rs.{getCart.totalPrice}</span>
                    {!getCart.loading ? 
                    <div className="toolbar-dropdown">
                    {getCart.cart.length != 0 ?
                    getCart.cart.map((cp)=>
                         <div className="dropdown-product-item">
                         <Link className="dropdown-product-thumb" to ={"/"+cp.title.split(' ').join('-').toLowerCase()+"/prid/"+cp.id}>
                         <img src={cp.Image}/>
                         </Link>
                         <div className="dropdown-product-info">
                             <Link className="dropdown-product-title" to ={"/"+cp.title.split(' ').join('-').toLowerCase()+"/prid/"+cp.id} >
                             {cp.isStock ? 
                                
                                cp.title

                            : 
                            cp.title+" (Out of Stock)"

                            }
                             </Link>
                             <span className="dropdown-product-details">{cp.qty} x Rs.{cp.Offer != null ? cp.Offer : cp.price}</span>
                         </div>
                     </div>
                        )

                        :
                        "Cart is Empty"
                    }
                   {getCart.count != 0 ?
                   <div>
                   <div className="toolbar-dropdown-group">
                   <div className="column">
                       <span className="text-lg">Total:</span>
                   </div>
                   <div className="column text-right">
                       <span className="text-lg text-medium">Rs.{getCart.totalPrice}</span>
                   </div>
                    </div>
                    <div className="toolbar-dropdown-group">
                        <div className="column">
                            <Link className="btn btn-sm btn-block btn-secondary" to = "/cart">View Cart</Link>
                        </div>
                        <div className="column">
                            <Link className="btn btn-sm btn-block btn-success" to = "/checkout">Checkout</Link>
                        </div>
                     </div>
                     </div>
                   :
                   <div className="toolbar-dropdown-group">
                        <div className="column">
                            <Link className="btn btn-sm btn-block btn-secondary" to = "/">Start Shopping</Link>
                        </div>
                        
                     </div>
                    }
                    
                </div>
                        :
                        <div className="toolbar-dropdown">

                        Loading...
                        </div>

                        }
                    
                    </div>*/}
            </div>
        </div>
    </div>
</header>
 </div>   	

			);
	}
}




export default withRouter(Header);