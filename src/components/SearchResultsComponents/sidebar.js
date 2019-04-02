import React,{Component} from 'react'
import {Link} from 'react-router-dom'

class Sidebar extends Component{
    
    render(){
        const {loading,categories} = this.props.Categories
        return(
            <div className="col-lg-3 order-lg-1 hidden-md-down">
            <aside className="sidebar">
                <div className="padding-top-2x hidden-lg-up"></div>
                <section className="widget widget-categories">
                    <h3 className="widget-title">Shop Categories</h3>
                    <ul>
                        {!loading ? 
                        categories.map((category,i)=>
                        <li key={i} className="has-children expanded">
                        <Link to={"/"+category.catTitle+"/cid/"+category.catId}>{category.catTitle}</Link>
                        <ul>
                            {category.proCats.map((proCat,j)=>
                              <li key={j}>
                              <Link to={"/"+proCat.proCatTitle+"/pcid/"+proCat.proCatId}>{proCat.proCatTitle}</Link>
                              
                                </li>  
                                
                            )}
                            
                            
                            
                        </ul>
                    </li>
                        
                        )
                           
                            :
                            "Loading"
                            }
                        
                        
                        
                        
                    </ul>
                </section>
        
            </aside>
        </div>
        )
    }
}

export default Sidebar