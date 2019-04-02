import React,{Component} from 'react'
import BeatLoader from 'react-spinners/BeatLoader'

class AskingName extends Component{

    state = {
        name : ''
    }

    nameChangeHandler = event => {
        this.setState({name:event.target.value})
    }

    submitHandler = event => {
        event.preventDefault()
        const token = localStorage.getItem('token')
        this.props.onSendName(this.state.name,token)
    }

    componentDidMount(){
        console.log(this.props.nameLoading)
    }

    render(){
        return(
        <div className="row">
        <div className="col-md-3"></div>
            <div className="col-md-6">
                <form onSubmit={this.submitHandler} className="login-box" method="post">
                    <p>Enter Your Name</p>
                    <input  className="form-control" onChange={this.nameChangeHandler} type="text" placeholder="Enter Your Name" required/><span className="input-group-addon"><i class="fa fa-profile"></i></span>
                    
                    <div className="text-center text-sm-right" >
                        <button className="btn btn-primary margin-bottom-none" type="submit">
                            <div className='sweet-loading'>
                                <BeatLoader
                                  sizeUnit={"px"}
                                  size={10}
                                  color={'white'}
                                  loading={this.props.nameLoading}
                                />
                            </div>
                        Finish 
                        </button>
                    </div>
                </form>
            </div>
        <div className="col-md-3"></div> 
        </div>
        
        );
    }

}

export default AskingName