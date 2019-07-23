import * as actionTypes from './actionTypes'
import axios from 'axios'
import * as authActions from './auth'
import { home, apiKey } from './keys';


export const showSMS = () => {
    return{
        type:actionTypes.SHOW_SMS
    }
}

export const hideSMS = () => {
    return{
        type:actionTypes.HIDE_SMS
    }
}


export const smsStart = () => {

    return({
        type:actionTypes.SMS_START
    })
}

export const smsSuccess = (id,phone) =>{

    return({
        type:actionTypes.SMS_SUCCESS,
        id: id,
        phone:phone
    })
}

export const smsFail = (error) => {

    return({
        type:actionTypes.SMS_FAIL,
        error : error
    })
}

export const smsSend = phone => {

    return dispatch => {
        dispatch(smsStart());
        axios.post(`${home}/api/verification/send/`,{phone:phone},{headers:{Authorization : apiKey}})
        .then(response=>{
            if(response.data.success){
                dispatch(smsSuccess(response.data.data.pk,response.data.data.phone))
            dispatch(hideSMS())
            dispatch(authActions.showAuth())

            }
            else{
                dispatch(smsFail(response.data.message))

            }
            
        })
        .catch(error=>{
            dispatch(smsFail(error.message))
        })
    }
    
}

export const onSMSStart = () => {

    return dispatch => {
        dispatch(showSMS())
    }
}