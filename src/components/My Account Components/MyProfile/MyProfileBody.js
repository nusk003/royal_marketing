import React,{Component} from 'react';
import { BeatLoader } from 'react-spinners';

class MyProfileBody extends Component{

    token = localStorage.getItem('token')
    state = {
        name : null,
        loading : false
    }

    nameChangeHandler = event => {
        this.setState({name:event.target.value})
    }

    nameUpdateHandler = event => {
        event.preventDefault()
        this.setState({loading:true})
        if (this.state.name == null){
            this.setState({name:this.props.getProfile.profile.name})
        }

        //alert(this.state.name)

        if(this.token != undefined){

            this.props.onUpdateName(this.state.name,this.token)
            setTimeout(()=>{this.props.onGetProfile(this.token)},1500)
            setTimeout(()=>{this.setState({loading:false})},2000)

        }
        
    }


    render(){

        return(
            
            <div className="col-lg-8">
            {!this.props.getProfile.loading ? 
            <div>
                <div className="padding-top-2x mt-2 hidden-lg-up"></div>
                <form className="row" onSubmit={this.nameUpdateHandler}>
                    <div className="col-md-6">
                        <div className="form-group">
                            <label for="account-fn">Name</label>
                            <input className="form-control" type="text" id="account-fn" onChange={this.nameChangeHandler} defaultValue={this.props.getProfile.profile.name} required/>
                            {!this.props.getProfile.profile.error != null ?
                            <p className="text-muted">{this.props.name.error}</p>
                            :
                            null
                            }
                            
                        </div>
                    </div>
                    
                    <div className="col-md-6">
                        <div className="form-group">
                            <label for="account-phone">Phone Number</label>
                            <input className="form-control" type="text" id="account-phone" value={this.props.getProfile.profile.phone} required/>
                        </div>
                    </div>
                   
                    <div className="col-12">
                        <hr className="mt-2 mb-3"/>
                        <div className="d-flex flex-wrap justify-content-between align-items-center">
                            <div className="custom-control custom-checkbox d-block">
                                
                            </div>
                            <button className="btn btn-primary margin-right-none" type="submit" data-toast data-toast-position="topRight" data-toast-type="success" data-toast-icon="icon-circle-check" data-toast-title="Success!" data-toast-message="Your profile updated successfuly.">
                            {this.state.loading ?
                            <BeatLoader
                            color = 'white'
                            />
                            :
                                "Update"
                            }
                            
                            </button>
                        </div>
                    </div>
                </form>
                </div>
                :
                
                null
                }
                
            </div>
        );
    }

}

export default MyProfileBody;