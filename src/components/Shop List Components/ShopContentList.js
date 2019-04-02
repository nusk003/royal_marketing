import React,{Component} from 'react';
import {Link} from 'react-router-dom';

class ShopContentList extends Component{

    render(){

        return(

            <div className="container padding-top-1x padding-bottom-3x">
            <div className="row">
                <div className="col-lg-9 order-lg-2">
                    <div className="shop-toolbar mb-30">
                        <div className="column">
                            <div className="shop-sorting">
                                <label for="sorting">Sort by:</label>
                                <select className="form-control" id="sorting">
                                    <option>Item Popy</option>
                                    <option>Avarage Rating</option>
                                    <option>Low - High Price</option>
                                    <option>High - Low Price</option>
                                    <option>Name A - Z Order</option>
                                    <option>Name Z - A Order</option>
                                </select><span className="text-muted">Show: </span><span> 1 - 12 items</span>
                            </div>
                        </div>
                        <div className="column">
                            <div className="shop-view">
                                <Link className="grid-view" to="/shop">
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                </Link>
                                <a className="list-view active" href="shop-list-1.html">
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                </a>
                            </div>
                        </div>
                    </div>
                   
                    <div className="product-card product-list">
                        <a className="product-thumb" href="#">
                            <img src="assets/images/shop/products/01.jpg" alt="Product"/>
                        </a>
                        <div className="product-info">
                            <h3 className="product-title"><a href="#">iPhone X 128GB</a></h3>
                            <h4 className="product-price">
                                <del>$799.99</del>$649.99
                            </h4>
                            <p className="hidden-xs-down">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make ...</p>
                            <div className="product-buttons">
                                <button className="btn btn-outline-secondary btn-sm btn-wishlist" data-toggle="tooltip" title="Whishlist">
                                    <i className="icon-heart"></i>
                                </button>
                                <button className="btn btn-outline-primary btn-sm" data-toast data-toast-type="success" data-toast-position="topRight" data-toast-icon="icon-circle-check" data-toast-title="Product" data-toast-message="successfuly added to cart!">Add to Cart</button>
                            </div>
                        </div>
                    </div>
                
                    <div className="product-card product-list">
                        <a className="product-thumb" href="#">
                            <img src="assets/images/shop/products/05.jpg" alt="Product"/>
                        </a>
                        <div className="product-info">
                            <h3 className="product-title"><a href="#">Panasonic TX-32</a></h3>
                            <h4 className="product-price">$800.00</h4>
                            <p className="hidden-xs-down">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make ...</p>
                            <div className="product-buttons">
                                <button className="btn btn-outline-secondary btn-sm btn-wishlist" data-toggle="tooltip" title="Whishlist">
                                    <i className="icon-heart"></i>
                                </button>
                                <button className="btn btn-outline-primary btn-sm" data-toast data-toast-type="success" data-toast-position="topRight" data-toast-icon="icon-circle-check" data-toast-title="Product" data-toast-message="successfuly added to cart!">Add to Cart</button>
                            </div>
                        </div>
                    </div>
                 
                    <div className="product-card product-list">
                        <a className="product-thumb" href="#">
                            <div className="rating-stars">
                                <i className="icon-star filled"></i>
                                <i className="icon-star filled"></i>
                                <i className="icon-star filled"></i>
                                <i className="icon-star filled"></i>
                                <i className="icon-star"></i>
                            </div>
                            <img src="assets/images/shop/products/09.jpg" alt="Product"/>
                        </a>
                        <div className="product-info">
                            <h3 className="product-title"><a href="#">Sony HDR-AS50R</a></h3>
                            <h4 className="product-price">$955.00</h4>
                            <p className="hidden-xs-down">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make ...</p>
                            <div className="product-buttons">
                                <button className="btn btn-outline-secondary btn-sm btn-wishlist" data-toggle="tooltip" title="Whishlist">
                                    <i className="icon-heart"></i>
                                </button>
                                <button className="btn btn-outline-primary btn-sm" data-toast data-toast-type="success" data-toast-position="topRight" data-toast-icon="icon-circle-check" data-toast-title="Product" data-toast-message="successfuly added to cart!">Add to Cart</button>
                            </div>
                        </div>
                    </div>
        
                    <div className="product-card product-list">
                        <a className="product-thumb" href="#">
                            <img src="assets/images/shop/products/13.jpg" alt="Product"/>
                        </a>
                        <div className="product-info">
                            <h3 className="product-title"><a href="#">HP LaserJet Pro 200</a></h3>
                            <h4 className="product-price">$247.00</h4>
                            <p className="hidden-xs-down">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make ...</p>
                            <div className="product-buttons">
                                <button className="btn btn-outline-secondary btn-sm btn-wishlist" data-toggle="tooltip" title="Whishlist">
                                    <i className="icon-heart"></i>
                                </button>
                                <button className="btn btn-outline-primary btn-sm" data-toast data-toast-type="success" data-toast-position="topRight" data-toast-icon="icon-circle-check" data-toast-title="Product" data-toast-message="successfuly added to cart!">Add to Cart</button>
                            </div>
                        </div>
                    </div>
                
                    <div className="product-card product-list">
                        <a className="product-thumb" href="#">
                            <div className="product-badge text-muted">Out of stock</div>
                            <img src="assets/images/shop/products/17.jpg" alt="Product"/>
                        </a>
                        <div className="product-info">
                            <h3 className="product-title"><a href="#">Apple Watch 3</a></h3>
                            <h4 className="product-price">$231.99</h4>
                            <p className="hidden-xs-down">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make ...</p>
                            <div className="product-buttons">
                                <button className="btn btn-outline-secondary btn-sm btn-wishlist" data-toggle="tooltip" title="Whishlist">
                                    <i className="icon-heart"></i>
                                </button>
                                <button className="btn btn-outline-primary btn-sm" data-toast data-toast-type="success" data-toast-position="topRight" data-toast-icon="icon-circle-check" data-toast-title="Product" data-toast-message="successfuly added to cart!">Add to Cart</button>
                            </div>
                        </div>
                    </div>
           
                    <div className="product-card product-list">
                        <a className="product-thumb" href="#">
                            <div className="rating-stars">
                                <i className="icon-star filled"></i>
                                <i className="icon-star filled"></i>
                                <i className="icon-star filled"></i>
                                <i className="icon-star filled"></i>
                                <i className="icon-star filled"></i>
                            </div>
                            <img src="assets/images/shop/products/21.jpg" alt="Product"/>
                        </a>
                        <div className="product-info">
                            <h3 className="product-title"><a href="#">Acer Aspire 15.6 i3</a></h3>
                            <h4 className="product-price">$649.00</h4>
                            <p className="hidden-xs-down">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make ...</p>
                            <div className="product-buttons">
                                <button className="btn btn-outline-secondary btn-sm btn-wishlist" data-toggle="tooltip" title="Whishlist">
                                    <i className="icon-heart"></i>
                                </button>
                                <button className="btn btn-outline-primary btn-sm" data-toast data-toast-type="success" data-toast-position="topRight" data-toast-icon="icon-circle-check" data-toast-title="Product" data-toast-message="successfuly added to cart!">Add to Cart</button>
                            </div>
                        </div>
                    </div>
                   
                    <nav className="pagination">
                        <div className="column">
                            <ul className="pages">
                                <li className="active"><a href="#">1</a></li>
                                <li><a href="#">2</a></li>
                                <li><a href="#">3</a></li>
                                <li>...</li>
                                <li><a href="#">10</a></li>
                                <li><a href="#">20</a></li>
                                <li><a href="#">30</a></li>
                            </ul>
                        </div>
                        <div className="column text-right hidden-xs-down">
                            <a className="btn btn-outline-secondary btn-sm" href="#">Next <i className="icon-arrow-right"></i></a>
                        </div>
                    </nav>
                </div>
            
                <div className="col-lg-3 order-lg-1 hidden-md-down">
                    <aside className="sidebar">
                        <div className="padding-top-2x hidden-lg-up"></div>
                        <section className="widget widget-categories">
                            <h3 className="widget-title">Shop Categories</h3>
                            <ul>
                                <li className="has-children expanded">
                                    <a href="#">Mobile Phones</a><span>(1277)</span>
                                    <ul>
                                        <li>
                                            <a href="#">Apple</a><span>(700)</span>
                                            <ul>
                                                <li><a href="#">iPhone x 64GB</a></li>
                                                <li><a href="#">iPhone 8 128GB</a></li>
                                                <li><a href="#">iPhone 7 Red</a></li>
                                                <li><a href="#">iPhone 6 Plus</a></li>
                                            </ul>
                                        </li>
                                        <li>
                                            <a href="#">Samsung</a><span>(500)</span>
                                            <ul>
                                                <li><a href="#">Samsung Galaxy S8</a></li>
                                                <li><a href="#">Samsung Galaxy S7</a></li>
                                                <li><a href="#">Samsung Galaxy J5</a></li>
                                                <li><a href="#">Samsung Golden A5</a></li>
                                            </ul>
                                        </li>
                                        <li><a href="#">Nokia Mobile</a><span>(37)</span></li>
                                        <li><a href="#">BlackBerry Phones</a><span>(42)</span></li>
                                    </ul>
                                </li>
                                <li className="has-children">
                                    <a href="#">PC & Laptops</a><span>(800)</span>
                                    <ul>
                                        <li>
                                            <a href="#">Apple</a><span>(500)</span>
                                            <ul>
                                                <li><a href="#">MacBook Pro 13.3</a></li>
                                                <li><a href="#">MacBook Pro 15.6</a></li>
                                                <li><a href="#">MacBook Pro 17</a></li>
                                                <li><a href="#">MacBook Pro 19</a></li>
                                            </ul>
                                        </li>
                                        <li>
                                            <a href="#">Lenovo</a><span>(250)</span>
                                            <ul>
                                                <li><a href="#">Lenovo Core i3</a></li>
                                                <li><a href="#">Lenovo Core i5</a></li>
                                                <li><a href="#">Lenovo Core i7</a></li>
                                                <li><a href="#">Lenovo Core 2 Quad</a></li>
                                            </ul>
                                        </li>
                                        <li><a href="#">Asus</a><span>(50)</span></li>
                                    </ul>
                                </li>
                                <li className="has-children">
                                    <a href="#">Tabs & Tablets</a><span>(420)</span>
                                    <ul>
                                        <li><a href="#">iPad 3 1TB</a><span>(180)</span></li>
                                        <li><a href="#">Samsung Tab Pro</a><span>(140)</span></li>
                                        <li><a href="#">Lenovo Tab 3TB</a><span>(100)</span></li>
                                    </ul>
                                </li>
                                <li className="has-children">
                                    <a href="#">Accessories</a><span>(760)</span>
                                    <ul>
                                        <li><a href="#">Televisions</a><span>(160)</span></li>
                                        <li><a href="#">Camcorders</a><span>(100)</span></li>
                                        <li><a href="#">Watches</a><span>(100)</span></li>
                                        <li><a href="#">Jewelry</a><span>(200)</span></li>
                                        <li><a href="#">Other</a><span>(200)</span></li>
                                    </ul>
                                </li>
                            </ul>
                        </section>
                     
                        <section className="widget widget-categories">
                            <h3 className="widget-title">Price Range</h3>
                            <form className="price-range-slider" method="post" data-start-min="250" data-start-max="970" data-min="0" data-max="1500" data-step="1">
                                <div className="ui-range-slider"></div>
                                <footer className="ui-range-slider-footer">
                                    <div className="column">
                                        <button className="btn btn-outline-primary btn-sm" type="submit">Filter</button>
                                    </div>
                                    <div className="column">
                                        <div className="ui-range-values">
                                            <div className="ui-range-value-min">$<span></span>
                                                <input type="hidden"/>
                                            </div> -
                                            <div className="ui-range-value-max">$<span></span>
                                                <input type="hidden"/>
                                            </div>
                                        </div>
                                    </div>
                                </footer>
                            </form>
                        </section>
                   
                        <section className="widget">
                            <h3 className="widget-title">Filter by Brand</h3>
                            <div className="custom-control custom-checkbox">
                                <input className="custom-control-input" type="checkbox" id="adidas"/>
                                <label className="custom-control-label" for="adidas">Apple <span className="text-muted">(197)</span></label>
                            </div>
                            <div className="custom-control custom-checkbox">
                                <input className="custom-control-input" type="checkbox" id="bilabong"/>
                                <label className="custom-control-label" for="bilabong">Samsung <span className="text-muted">(123)</span></label>
                            </div>
                            <div className="custom-control custom-checkbox">
                                <input className="custom-control-input" type="checkbox" id="klein"/>
                                <label className="custom-control-label" for="klein">Sony <span className="text-muted">(148)</span></label>
                            </div>
                            <div className="custom-control custom-checkbox">
                                <input className="custom-control-input" type="checkbox" id="nike"/>
                                <label className="custom-control-label" for="nike">Lenovo <span className="text-muted">(164)</span></label>
                            </div>
                            <div className="custom-control custom-checkbox">
                                <input className="custom-control-input" type="checkbox" id="bahama"/>
                                <label className="custom-control-label" for="bahama">Panasonic <span className="text-muted">(139)</span></label>
                            </div>
                        </section>
                       
                        <section className="widget">
                            <h3 className="widget-title">Filter by Size</h3>
                            <div className="custom-control custom-checkbox">
                                <input className="custom-control-input" type="checkbox" id="xl"/>
                                <label className="custom-control-label" for="xl">64GB <span className="text-muted">(208)</span></label>
                            </div>
                            <div className="custom-control custom-checkbox">
                                <input className="custom-control-input" type="checkbox" id="l"/>
                                <label className="custom-control-label" for="l">128GB <span className="text-muted">(311)</span></label>
                            </div>
                            <div className="custom-control custom-checkbox">
                                <input className="custom-control-input" type="checkbox" id="m"/>
                                <label className="custom-control-label" for="m">256GB <span className="text-muted">(485)</span></label>
                            </div>
                            <div className="custom-control custom-checkbox">
                                <input className="custom-control-input" type="checkbox" id="s"/>
                                <label className="custom-control-label" for="s">512GB <span className="text-muted">(213)</span></label>
                            </div>
                            <div className="custom-control custom-checkbox">
                                <input className="custom-control-input" type="checkbox" id="ss"/>
                                <label className="custom-control-label" for="s">1TB <span className="text-muted">(213)</span></label>
                            </div>
                        </section>
                        <section className="promo-box shop-promo">
                            <div className="promo-box-content text-center padding-top-3x padding-bottom-2x">
                                <h4 className="text-light text-thin text-shadow">New Collection of</h4>
                                <h3 className="text-bold text-light text-shadow">Smatphones</h3>
                                <a className="btn btn-sm btn-primary" href="shop-grid-1.html">Shop Now</a>
                            </div>
                        </section>
                      
                    </aside>
                </div>
              
            </div>
        </div>
        );
    }
}


export default ShopContentList;