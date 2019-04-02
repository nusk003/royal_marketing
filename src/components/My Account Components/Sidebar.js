import React,{Component} from 'react';
import {Link,NavLink} from 'react-router-dom';

class Sidebar extends Component{

    state = {
        profile : true,
        address : false,
        orders : false
    }

    activeChangeHandler = (event,identifier) => {
        
            if(identifier === "profile"){
                this.setState({profile:true,orders:false,address:false})
            }            
            if (identifier === "orders"){
                this.setState({profile:false,orders:true,address:false})
            }
            if (identifier === "address"){
                this.setState({profile:false,orders:false,address:true})
        }
    }

    render(){

        return(

            <div className="col-lg-4">
                <aside className="user-info-wrapper">
                    <div className="user-cover account-details">
                        <div className="info-label" data-toggle="tooltip" title="You currently have 530 Reward Points to spend"><i className="icon-medal"></i></div>
                    </div>
                    <div className="user-info">
                        <div className="user-data">
                        {!this.props.getProfile.loading ? 
                            <div>
                            <h4>{this.props.getProfile.profile.name}</h4><span>Joined {this.props.getProfile.profile.dateOfJoin}</span>
                            </div>
                            :
                                null
                            }
                        </div>
                    </div>
                </aside>
                <nav className="list-group">
                    <NavLink  activeStyle={{backgroundColor:'#fd7e14',color:'white'}} to="/account/profile" className="list-group-item"><i className="icon-head"></i> My Profile</NavLink>
                    <NavLink  activeStyle={{backgroundColor:'#fd7e14',color:'white'}} className="list-group-item" to="/account/orders"><i className="icon-bag"></i> My Orders</NavLink>
                    <NavLink  activeStyle={{backgroundColor:'#fd7e14',color:'white'}} className="list-group-item" to="/account/address" ><i className="icon-map"></i> My Addresses</NavLink>

                </nav>
            </div>

        );

    }
}

export default Sidebar;