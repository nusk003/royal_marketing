import React from 'react'
import {Link} from 'react-router-dom'

const TopCategory = (props) => {

    return(
        <div className="col-md-4 col-sm-6 home-cat">
                <div className="card">
                    <Link className="card-img-tiles" to="/tc">
                        <div className="inner">
                            <div className="main-img">
                            {props.Image.slice(0,1).map((img)=>
                                <img src={img} alt="Category" />

                                )}
                            </div>
                            <div className="thumblist">
                            {props.Image.slice(1,3).map((img)=>
                                <img src={img} alt="Category" />

                                )}
                            </div>
                        </div>
                    </Link>
                    <div className="card-body text-center">
                        <h4 className="card-title">{props.title}</h4>
                        
                        <Link className="btn btn-outline-primary btn-sm" to={"/"+props.title+"/cid/"+props.id}>View Products</Link>
                    </div>
                </div>
        </div>
    )

};

export default TopCategory;