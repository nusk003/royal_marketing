import React,{Component} from 'react'
import BeatLoader from 'react-spinners/BeatLoader';



class AskingPhone extends Component{
    state = {
        phone:null
    }
    phoneChangeHandler = event => {
        this.setState({phone:"+94"+event.target.value})

    }

    submitHandler = e => {
        e.preventDefault();
        this.props.onSendSMS(this.state.phone)
    }
    render(){
        return(
            <div className="row">
        <div className="col-md-3"></div>
            <div className="col-md-6">
                <form className="login-box" onSubmit = {this.submitHandler} method="post">
                    <p>Enter Your Mobile Number</p>
                    <div className="form-group input-group" >
                       <div > 
                        <p style={{position:"absolute",top:10,zIndex:3,left:30}}>+94</p>
                        <input style={{position:"absolute",paddingLeft:60}} maxLength={9} onChange={this.phoneChangeHandler} className="form-control" type="tel" placeholder="Enter Your Mobile Number" required/><span style={{position:"absolute",top:25,left:0,padding:10}} className="input-group-addon"><i className="fa fa-phone"></i></span>
                        </div>
                    
                    </div>
                    {this.props.isErrorSendPhone ? 
                        
                        <p style={{marginTop:75}}>{this.props.errorSendPhone}</p>

                        :
                        null
                        }
                    
                    <div className="text-center text-sm-right" style={{marginTop:60}}>
                        <button className="btn btn-primary margin-bottom-none" type="submit"><div className='sweet-loading'>
                        <BeatLoader
                         // className={override}
                          sizeUnit={"px"}
                          size={10}
                          color={'white'}
                          loading={this.props.smsLoading}
                        />
                        </div>Next </button>
                    </div>
                </form>
            </div>
            <div className="col-md-3"></div> 
        </div>
        )
    }
}

export default AskingPhone