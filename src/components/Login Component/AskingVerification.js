import React,{Component} from 'react'
import BeatLoader from 'react-spinners/BeatLoader';
import ReactCodeInput from 'react-code-input'



class AskingVerification extends Component{
    state = {
        loading : false
    }
    prop = {
        // className: reactCodeInput,
         inputStyle: {
          
           margin:  '4px',
           MozAppearance: 'textfield',
           width: '50px',
           borderRadius: '5px',
           fontSize: '25px',
           height: '50px',
           backgroundColor: 'transparent',
           color: 'black',
           border: '1px solid black',
           textAlign : 'center',
           boxShadow : '0'
     
          
         },
         inputStyleInvalid: {
             margin:  '4px',
             MozAppearance: 'textfield',
             width: '50px',
             borderRadius: '5px',
             fontSize: '25px',
             height: '50px',
             backgroundColor: 'transparent',
             color: 'black',
             border: '1px solid red',
             textAlign : 'center'
         },
         autoFocus:true,
         
       }
    verficationChangleHandler = (newVal) => {
        console.log(newVal)
        if(newVal.length===4){
            
            this.props.onAuth(this.props.verifyId,newVal)
        }
    }
    componentDidMount(){
        //console.log(this.props.isShowName)
    }
    render(){
        return(
            <div className="row">
        <div className="col-md-3"></div>
            <div className="col-md-6">
                <form className="login-box" method="post">
                    <p>Enter the Verification Code</p>
                    <ReactCodeInput type='number' fields={4} isValid={this.props.errorVerifyCode === null} onChange = {this.verficationChangleHandler} {...this.prop}/>
                    
                    <div className="text-center text-sm-right" >
                        <div className='sweet-loading'>
                        <BeatLoader
                         // className={override}
                          
                          sizeUnit={"px"}
                          size={10}
                          color={'orange'}
                          loading={this.props.authLoading}
                        />
                        </div>
                    </div>
                </form>
            </div>
            <div className="col-md-3"></div> 
        </div>
        )
    }
}

export default AskingVerification