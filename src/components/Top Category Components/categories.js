import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import PromoBannerMd9 from './PromoBannerMd9';
import CatSidebar from './catSideBar';

class Categories extends Component{

	render(){
        return(
        <div className="container padding-top-1x padding-bottom-2x">
        <div className="row">
            <div className="col-lg-9 order-lg-2">
                
                <PromoBannerMd9/>
              
                <div className="row">
                    <div className="col-md-4 col-sm-6">
                        <div className="card mb-30">
                            <Link className="card-img-tiles" to="/shop">
                                <div className="inner">
                                    <div className="main-img">
                                        <img src="assets/images/shop/categories/01.jpg" alt="Category"/>
                                    </div>
                                    <div className="thumblist">
                                        <img src="assets/images/shop/categories/02.jpg" alt="Category"/>
                                        <img src="assets/images/shop/categories/03.jpg" alt="Category"/>
                                    </div>
                                </div>
                            </Link>
                            <div className="card-body text-center">
                                <h4 className="card-title">phdfdfdsf</h4>
                                <p className="text-muted">Starting ftomm $149</p>
                                <a className="btn btn-outline-primary btn-sm" href="shop-list-1.html">View Products</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 col-sm-6">
                        <div className="card mb-30">
                            <a className="card-img-tiles" href="shop-grid-1.html">
                                <div className="inner">
                                    <div className="main-img">
                                        <img src="assets/images/shop/categories/04.jpg" alt="Category"/>
                                    </div>
                                    <div className="thumblist">
                                        <img src="assets/images/shop/categories/05.jpg" alt="Category"/>
                                        <img src="assets/images/shop/categories/06.jpg" alt="Category"/>
                                    </div>
                                </div>
                            </a>
                            <div className="card-body text-center">
                                <h4 className="card-title">Laptops</h4>
                                <p className="text-muted">Starting from $349</p>
                                <a className="btn btn-outline-primary btn-sm" href="shop-list-1.html">View Products</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 col-sm-6">
                        <div className="card mb-30">
                            <a className="card-img-tiles" href="shop-grid-1.html">
                                <div className="inner">
                                    <div className="main-img">
                                        <img src="assets/images/shop/categories/07.jpg" alt="Category"/>
                                    </div>
                                    <div className="thumblist">
                                        <img src="assets/images/shop/categories/08.jpg" alt="Category"/>
                                        <img src="assets/images/shop/categories/09.jpg" alt="Category"/>
                                    </div>
                                </div>
                            </a>
                            <div className="card-body text-center">
                                <h4 className="card-title">Televisions</h4>
                                <p className="text-muted">Starting from $499</p>
                                <a className="btn btn-outline-primary btn-sm" href="shop-list-1.html">View Products</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 col-sm-6">
                        <div className="card mb-30">
                            <a className="card-img-tiles" href="shop-grid-1.html">
                                <div className="inner">
                                    <div className="main-img">
                                        <img src="assets/images/shop/categories/10.jpg" alt="Category"/>
                                    </div>
                                    <div className="thumblist">
                                        <img src="assets/images/shop/categories/11.jpg" alt="Category"/>
                                        <img src="assets/images/shop/categories/12.jpg" alt="Category"/>
                                    </div>
                                </div>
                            </a>
                            <div className="card-body text-center">
                                <h4 className="card-title">Watches</h4>
                                <p className="text-muted">Starting from $560</p>
                                <a className="btn btn-outline-primary btn-sm" href="shop-list-1.html">View Products</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 col-sm-6">
                        <div className="card mb-30">
                            <a className="card-img-tiles" href="shop-grid-1.html">
                                <div className="inner">
                                    <div className="main-img">
                                        <img src="assets/images/shop/categories/13.jpg" alt="Category"/>
                                    </div>
                                    <div className="thumblist">
                                        <img src="assets/images/shop/categories/14.jpg" alt="Category"/>
                                        <img src="assets/images/shop/categories/15.jpg" alt="Category"/>
                                    </div>
                                </div>
                            </a>
                            <div className="card-body text-center">
                                <h4 className="card-title">Cameras</h4>
                                <p className="text-muted">Starting from $249</p>
                                <a className="btn btn-outline-primary btn-sm" href="shop-list-1.html">View Products</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 col-sm-6">
                        <div className="card mb-30">
                            <a className="card-img-tiles" href="shop-grid-1.html">
                                <div className="inner">
                                    <div className="main-img">
                                        <img src="assets/images/shop/categories/16.jpg" alt="Category"/>
                                    </div>
                                    <div className="thumblist">
                                        <img src="assets/images/shop/categories/17.jpg" alt="Category"/>
                                        <img src="assets/images/shop/categories/18.jpg" alt="Category"/>
                                    </div>
                                </div>
                            </a>
                            <div className="card-body text-center">
                                <h4 className="card-title">Consoles</h4>
                                <p className="text-muted">Starting from $579</p>
                                <a className="btn btn-outline-primary btn-sm" href="shop-list-1.html">View Products</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <CatSidebar/>
        </div>
    </div>
 );      

	}
}

export default Categories;