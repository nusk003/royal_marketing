import React,{Component} from 'react';
import {Link} from 'react-router-dom'

class CatSidebar extends Component{

    state = {

        isLoading : true,
        brands : []

    }
    

	render(){
        const {loading,brand} = this.props.brands
        return(

        <div className="col-lg-3 order-lg-1 hidden-md-down">
                <aside className="sidebar">
                    <div className="padding-top-1x padding-bottom-2x hidden-md-up"></div>
                    <section className="widget widget-categories">
                        <h3 className="widget-title">Popular Brands</h3>
                        <ul>
                            { !loading ? (
                                
                                brand.map((item,i) => <li key={i}><Link to={"/"+item.title+"/bid/"+item.pk}>{item.title}</Link></li>)

                                


                            ) : (

                                <p>Loading....</p>
                            )


                            }
                            
                        </ul>
                    </section>
                    
                    {/* <section className="promo-box shop-promo">
                        <div className="promo-box-content text-center padding-top-3x padding-bottom-2x">
                            <h4 className="text-light text-thin text-shadow">New Collection of</h4>
                            <h3 className="text-bold text-light text-shadow">Smatphones</h3>
                            <a className="btn btn-sm btn-primary" href="shop-grid-1.html">Shop Now</a>
                        </div>
                    </section> */}
                </aside>
        </div>

        );
	
	}
}

export default CatSidebar;