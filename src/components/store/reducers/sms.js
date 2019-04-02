import updatedObject from '../../utility'
import * as actionTypes from '../actions/actionTypes'

const initialState = {
    id: null,
    phone: null,
    loading: false,
    isShow : false,
    error : null
}

const showSMS = (state,action) => {
    return updatedObject(state,{
        isShow : true
    })
}

const hideSMS = (state,action) => {
    return updatedObject(state,{
        isShow : false
    })
}

const smsStart = (state,action) =>{
    return updatedObject(state,{
        loading : true
    })
}

const smsSuccess = (state,action) => {
    return updatedObject(state,{
        loading : false,
        phone : action.phone,
        id:action.id,
        isShow : false,
    })
}

const smsFail = (state,action) => {
    return updatedObject(state,{
        loading:false,
        error:action.error
    })
}

const smsReducer = (state=initialState,action) => {

    switch (action.type){
        case actionTypes.SMS_START:return smsStart(state,action)
        case actionTypes.SMS_SUCCESS:return smsSuccess(state,action)
        case actionTypes.SMS_FAIL:return smsFail(state,action)
        case actionTypes.SHOW_SMS:return showSMS(state,action)
        case actionTypes.HIDE_SMS:return hideSMS(state,action)
        default: return state
    }
}

export default smsReducer