import * as actionTypes  from './actionTypes'
import axios from 'axios'
import { home } from './keys';

export const getProfileStart = () => {
    return {
        type : actionTypes.GET_PROFILE_START
    }
}

export const getProfileSuccess = profile => {

    return {
        type : actionTypes.GET_PROFILE_SUCCESS,
        profile : profile
    }
}

export const getProfileFail = err => {
    return {
        type : actionTypes.GET_PROFILE_FAIL,
        error : err
    }
}

export const getProfile = token => {
    return dispatch => {
        dispatch (getProfileStart())
        axios.get(`${home}/api/user/profile/`,{headers:{Authorization:"Token "+token}})
        .then(res=>{
            dispatch(getProfileSuccess(res.data))
        })
        .catch(err=>{
            dispatch(getProfileFail(err))
        })
    }
    
}
