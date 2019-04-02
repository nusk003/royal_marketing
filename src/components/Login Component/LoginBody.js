import React,{Component} from 'react';
import AskingPhone from './AskingPhone';
import AskingVerification from './AskingVerification';
import AskingName from './AskingName';
import * as actions from '../store/actions/index';

import {connect} from 'react-redux'



class LoginBody extends Component{
    componentDidMount(){
        this.props.onSMSStart()
    }
    render(){

        return(

    <div className="container padding-top-1x padding-bottom-3x">
    {this.props.isShowSms ?
         <AskingPhone {...this.props}/>
         :
         null
         }
    {this.props.isShowVerification ?
        <AskingVerification {...this.props} />
        :
         null
         }
    {this.props.isShowName  ?
        <AskingName {...this.props} />
        
        :
        null
        }
    </div>
        );
    }
}

const mapStateToProps = state => {

    return{

        isShowSms : state.sms.isShow,
        isShowVerification :state.auth.isShow,
        isShowName : state.name.isShow,
        verifyId : state.sms.id,
        isAuthenticated : state.auth.token !== null,
        smsLoading : state.sms.loading,
        authLoading : state.auth.loading,
        nameLoading : state.name.loading,
        errorVerifyCode : state.auth.error,
        isErrorSendPhone : state.sms.error != null,
        errorSendPhone : state.sms.error,

    }
}

const mapDispatchToProps = dispatch => {
    return  {
        onSMSStart : () => dispatch(actions.onSMSStart()),
        onSendSMS : (phone) => dispatch(actions.smsSend(phone)),
        onAuth : (id,otp) => dispatch(actions.authLogin(id,otp)),
        onSendName : (name,token) => dispatch(actions.updateName(name,token)),
        onMergeCart : (token,cartPro) => dispatch(actions.mergeCart(token,cartPro)),
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(LoginBody);