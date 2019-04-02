import React,{Component} from 'react'
import {Link} from 'react-router-dom'

class PageNotFoundContent extends Component{

    render(){

        return(

        <div className="container padding-top-3x padding-bottom-3x">
            <img className="d-block m-auto page-404" src="assets/images/404_art.jpg" alt="404"/>
            <div className="text-center">
                <h3>Page Not Found</h3>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. <Link to="/home">Go back to Homepage</Link><br/>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
            </div>
        </div>

        );
    }
}

export default PageNotFoundContent;