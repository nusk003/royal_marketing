import React, { Component } from 'react';
import TopCategory from '../Categories/Top Categories/TopCategory';



class TopCat extends Component{
    


    componentWillMount(){

        this.props.onFetchTopCats()
        
    }

    
    
	render(){
        
        
		return(

		<section className="container padding-top-3x">
        <h3 className="text-center mb-30">Top Categories</h3>
        <div className="row">
        { !this.props.topCat.loading ? (

            this.props.topCat.cats.slice(0,3).map((item,i) =><TopCategory key={i}  title={item.catTitle} id = {item.catId} Image={item.images} />
            )


        ) : (
            <div>
                <div className="col-md-4 col-sm-6 home-cat">
                    loading...
                </div>
                <div className="col-md-4 col-sm-6 home-cat">
                    loading...
                </div>
                <div className="col-md-4 col-sm-6 home-cat">
                    loading...
                </div>
           
            </div>

        )}
        
        </div>
    </section>

            );
     
	}
}

export default TopCat;