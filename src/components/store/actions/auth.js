import * as actionTypes from './actionTypes'
import axios from 'axios'
import * as actions from './index'
import { home, apiKey } from './keys';


export const showAuth = () => {
    return{
        type:actionTypes.SHOW_AUTH
    }
}

export const hideAuth = () => {
    return{
        type:actionTypes.HIDE_AUTH
    }
}



export const authStart = () => {

    return{
        type:actionTypes.AUTH_START
    }

}

export const authSuccess = (token,isLogin) => {

    return{
        type : actionTypes.AUTH_SUCCESS,
        token : token,
        isLogin : isLogin
    }
}

export const authFail = error =>{

    return{
        type: actionTypes.AUTH_FAIL,
        error: error
    }
}

export const authLogout = () => {

    localStorage.removeItem('token')
    localStorage.removeItem('expiry')
    return{
        type:actionTypes.AUTH_LOGOUT
    }
}



export const authLogin = (id,otp) => {

    return dispatch => {
        dispatch(authStart())
        axios.post(`${home}/api/verification/verify/`,{pk:id,otp:otp},{headers:{Authorization:apiKey}})
        .then(response=>{

            dispatch(actions.mergeCart(response.data.token,JSON.parse(localStorage.getItem('cart')).CartProducts,response.data.isLogin))
        
        })
        .catch(error=>{
            dispatch(authFail(error))
        })
    }

}


export const autoCheckState = () => {

    return dispatch => {
        const token = localStorage.getItem('token')
        if (token === undefined){
            dispatch(authLogout())
        }
        else{
            dispatch(authSuccess(token,true))
        }
    }
}

export const onAuthShow = () => {
    return dispatch => {
        dispatch(showAuth())
    }
}