import React,{Component} from 'react'
import {Link} from 'react-router-dom'

class CategoriesLI extends Component {

    render(){
        const {categories} = this.props
        return(
            categories.map((category,i)=>
                <li  key={i}>
                <span>
                    <Link to = {"/"+category.catTitle+"/cid/"+category.catId}>{category.catTitle}</Link>
                    <span className="sub-menu-toggle"></span>
                </span>

                
            </li>
                
                )
        )
    }
}

export default CategoriesLI