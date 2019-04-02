import  React,{Component} from 'react'
import {NavLink} from 'react-router-dom'
let activeStyle = {}
class Pagination extends Component {

    onClick = (e,i) => {

        e.preventDefault()
        
    }

    render(){

        const {count} = this.props
        const {size} = this.props
        const {currentPage} = this.props

        let pages = []

        for(let i = 0; i<Math.ceil((count/size));i++){
            if(currentPage == (i+1)){
                activeStyle = {backgroundColor : '#ed2230',color:'white'}
            }
            
            pages.push(<li>{currentPage != (i+1) ?
                <NavLink to="/results"  onClick = {(event) => this.props.onPageChange(event,(i+1))} >{i+1}</NavLink>
            :
            <NavLink to="/results" activeStyle={activeStyle} onClick = {(event) => this.onClick(event,(i+1))} >{i+1}</NavLink>
            }</li>)
        }
        return(
            <nav className="pagination">
                <div className="column">
                    <ul className="pages">
                        {pages}
                    </ul>
                </div>
                
            </nav>
        )
    }
}

export default Pagination