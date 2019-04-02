import React, { Component } from 'react';
import { Link } from 'react-router-dom';
	

	const PageHeader = (props) => {
		return(

	<div className="page-title">
        <div className="container">
            <div className="column">
                <h1>{props.name}</h1>
            </div>
            <div className="column">
                <ul className="breadcrumbs">
                    <li><Link to="/home">Home</Link></li>
                    <li className="separator">&nbsp;</li>
                    <li>{props.bread}</li>
                </ul>
            </div>
        </div>
    </div>

			);
	

	}
/*className PageHeader extends Component{



	render(){

		return(

			<div classNameName="page-title">
        <div classNameName="container">
            <div classNameName="column">
                <h1>Shopping Cart</h1>
            </div>
            <div classNameName="column">
                <ul classNameName="breadcrumbs">
                    <li><Link to="index.html">{}</Link></li>
                    <li classNameName="separator">&nbsp;</li>
                    <li>{}</li>
                </ul>
            </div>
        </div>
    </div>

			);
	}
}*/

export default PageHeader;