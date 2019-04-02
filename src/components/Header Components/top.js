import React,{Component} from 'react';

class Top extends Component{

	render(){

		return(

			<div className="topbar">
    <div className="topbar-column">
        <a className="hidden-md-down" href="#"><i className="fa fa-phone"></i>&nbsp;+94777777777</a>
        <a className="hidden-md-down" href="#"><i className="fa fa-envelope-o"></i>&nbsp;info@royalmarketing.lk</a>
        <a className="hidden-md-down" href="#"><i className="fa fa-map-marker"></i> 111/C Kandy</a>
    </div>
    <div className="topbar-column">
        {/*<div className="lang-currency-switcher-wrap">
            <div className="lang-currency-switcher dropdown-toggle">
                <span className="currency">Rs LKR</span>
            </div>
            <div className="dropdown-menu">
                <div className="currency-select">
                    <select className="form-control form-control-rounded form-control-sm">
                        <option value="usd">Rs LKR</option>
                        
                    </select>
                </div>
            </div>
        </div>*/}
        <a className="social-button sb-facebook shape-none sb-dark soc-border" href="#" target="_blank"><i className="socicon-facebook"></i></a>
        <a className="social-button sb-twitter shape-none sb-dark" href="#" target="_blank"><i className="socicon-twitter"></i></a>
        <a className="social-button sb-instagram shape-none sb-dark" href="#" target="_blank"><i className="socicon-instagram"></i></a>
    </div>
</div>

			);
	}
}


export default Top;