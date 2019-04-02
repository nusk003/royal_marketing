import React,{Component} from 'react'
import ReviewBody from './ReviewBody';
import Sidebar from '../Sidebar';

class ReviewContent extends Component{

    render(){

        return(

            <div className="container padding-top-1x padding-bottom-3x">
        <div className="row">
        <ReviewBody/>
        <Sidebar/>
        </div>
        </div>
        );
    }
}

export default ReviewContent;