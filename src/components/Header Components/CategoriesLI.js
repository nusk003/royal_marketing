import React,{Component} from 'react'
import {Link} from 'react-router-dom'

class CategoriesLI extends Component {

    render(){
        const {categories} = this.props
        return(
            categories.map((category,i)=>
                <li className="has-children" key={i}>
                <span>
                    <Link to = {"/"+category.catTitle+"/cid/"+category.catId}>{category.catTitle}</Link>
                    <span className="sub-menu-toggle"></span>
                </span>

                <ul className="offcanvas-submenu">
                {category.proCats.map((proCat,j)=>
                    <li key={j}><Link to={"/"+proCat.proCatTitle+"/pcid/"+proCat.proCatId} >{proCat.proCatTitle}</Link></li>

                    )}
                   
                </ul>
            </li>
                
                )
        )
    }
}

export default CategoriesLI