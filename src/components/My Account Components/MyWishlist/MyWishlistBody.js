import React,{Component} from 'react';

class MyWishlistBody extends Component{

    render(){

        return(

            <div className="col-lg-8">
            <div className="padding-top-2x mt-2 hidden-lg-up"></div>

            <div className="table-responsive wishlist-table margin-bottom-none">
                <table className="table">
                    <thead>
                    <tr>
                        <th>Product Name</th>
                        <th className="text-center"><a className="btn btn-sm btn-outline-danger" href="#">Empty Wishlist</a></th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>
                            <div className="product-item"><a className="product-thumb" href="shop-single-1.html"><img src="../assets/images/shop/cart/01.jpg" alt="Product"/></a>
                                <div className="product-info">
                                    <h4 className="product-title"><a href="shop-single-1.html">iPhone X Black</a></h4>
                                    <div className="text-lg text-medium text-muted">$649.00</div>
                                    <div>Availability:
                                        <div className="d-inline text-success">In Stock</div>
                                    </div>
                                </div>
                            </div>
                        </td>
                        <td className="text-center"><a className="remove-from-cart" href="#" data-toggle="tooltip" title="Remove item"><i className="icon-cross"></i></a></td>
                    </tr>
                    <tr>
                        <td>
                            <div className="product-item"><a className="product-thumb" href="shop-single-1.html"><img src="../assets/images/shop/cart/02.jpg" alt="Product"/></a>
                                <div className="product-info">
                                    <h4 className="product-title"><a href="shop-single-1.html">Panasonic TX-32</a></h4>
                                    <div className="text-lg text-medium text-muted">$800.00</div>
                                    <div>Availability:
                                        <div className="d-inline text-warning">2 - 3 Days</div>
                                    </div>
                                </div>
                            </div>
                        </td>
                        <td className="text-center"><a className="remove-from-cart" href="#" data-toggle="tooltip" title="Remove item"><i className="icon-cross"></i></a></td>
                    </tr>
                    <tr>
                        <td>
                            <div className="product-item"><a className="product-thumb" href="shop-single-1.html"><img src="../assets/images/shop/cart/03.jpg" alt="Product"/></a>
                                <div className="product-info">
                                    <h4 className="product-title"><a href="shop-single-1.html">Acer Aspire 15.6 i3</a></h4>
                                    <div className="text-lg text-medium text-muted">$549.00</div>
                                    <div>Availability:
                                        <div className="d-inline text-danger">Out Of Stock</div>
                                    </div>
                                </div>
                            </div>
                        </td>
                        <td className="text-center"><a className="remove-from-cart" href="#" data-toggle="tooltip" title="Remove item"><i className="icon-cross"></i></a></td>
                    </tr>
                    </tbody>
                </table>
            </div>
            <hr className="mb-4"/>
            <div className="custom-control custom-checkbox">
                <input className="custom-control-input" type="checkbox" id="inform_me" checked />
                <label className="custom-control-label" for="inform_me">Inform me when item from my wishlist is available</label>
            </div>
        </div>           



        );
    }
}

export default MyWishlistBody;