import React,{Component} from 'react';
import Comment  from './Comment'
import {withRouter} from "react-router-dom";

class Reviews extends Component{


    state = {
        review : "",
        subject : "",
        stars : 5
    }

    componentWillMount () {

        console.log('Component will mount')
        console.log(this.state)

    }

    changeHandler = (event,identifier) => {

        if(identifier == "review"){
            this.setState({review : event.target.value})
        }

        if(identifier == "subject"){
            this.setState({subject : event.target.value})
        }

        if(identifier == "stars"){
            this.setState({stars : event.target.value})
        }

    }

    onSubmitReview = (event) => {

        event.preventDefault()

        const token = localStorage.getItem('token')

        if(token != undefined){

            
            const review = {
                subject : this.state.subject,
                review : this.state.review,
                stars : this.state.stars,
                productId : this.props.match.params.id
            }

            this.props.createReview(token,review)
            this.setState({review:"",subject:"",stars:5})
            setTimeout(
               () => {this.props.history.push('/'+this.props.match.params.title+'/prid/'+this.props.match.params.id)},500
            )
          
        }

        else{

            this.props.history.push('/login')

        }
        
    }

    render(){

        return(

            <div className="tab-pane fade" id="reviews" role="tabpanel">
                {this.props.reviews.map((review,j)=> <Comment key={j} review={review}/> )}            
                    
                <h5 className="mb-30 padding-top-1x">Leave Review</h5>
                <form className="row" method="post" onSubmit={this.onSubmitReview}>
                    
                    <div className="col-sm-6">
                        <div className="form-group">
                            <label for="review_subject">Your Subject</label>
                            <input value={this.state.subject} onChange = {(event) => this.changeHandler(event,"subject")}  className="form-control form-control-rounded" type="text" id="review_subject" required />
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div className="form-group">
                            <label for="review_rating">Your Rate</label>
                            <select className="form-control form-control-rounded" value={this.state.stars} onChange={(event)=>this.changeHandler(event,"stars")} id="review_rating">
                                <option value = {5} >5 Stars</option>
                                <option value = {4} >4 Stars</option>
                                <option value = {3} >3 Stars</option>
                                <option value = {2} >2 Stars</option>
                                <option value = {1} >1 Star</option>
                            </select>
                        </div>
                    </div>
                    <div className="col-12">
                        <div className="form-group">
                            <label for="review_text">Review </label>
                            <textarea value={this.state.review} className="form-control form-control-rounded" onChange={(event)=>this.changeHandler(event,"review")} id="review_text" rows="8" required></textarea>
                        </div>
                    </div>
                    <div className="col-12 text-right">
                        <button className="btn btn-outline-primary" type="submit">Submit Review</button>
                    </div>
                </form>
        </div>
        );
    }
}

export default withRouter(Reviews);