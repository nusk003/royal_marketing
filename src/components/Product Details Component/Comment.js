import React,{Component} from 'react'

class Comment extends Component{
    
    render(){
        let stars = []
        for(let i=0 ; i<this.props.review.stars;i++){
            stars.push(<i className="icon-star filled"></i>)
        }
        return(
            <div className="comment">
                <div className="comment-author-ava"><img src="../../../assets/images/reviews/01.jpg" alt="Review Author" /></div>
                <div className="comment-body">
                    <div className="comment-header d-flex flex-wrap justify-content-between">
                        <h4 className="comment-title">{this.props.review.subject}</h4>
                        <div className="mb-2">
                            <div className="rating-stars">
                            { stars}
                            
                            </div>
                        </div>
                    </div>
                    <p className="comment-text">{this.props.review.review}</p>
                    <div className="comment-footer"><span className="comment-meta">{this.props.review.customerName}</span></div>
                </div>
            </div>
        )
    }
}

export default Comment