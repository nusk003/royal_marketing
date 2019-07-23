import * as actionTypes from './actionTypes'
import axios from 'axios'
import { home, apiKey } from './keys';

export const getProDetailsStart = () =>{

    return{
        type : actionTypes.GET_PRO_DETAILS_START
    }
}

export const getProDetailsSuccess = det => {

    return {
        type : actionTypes.GET_PRO_DETAILS_SUCCESS,
        details : det,
        
    }
}

export const getProDetailsFail = error =>{
    return {
        type : actionTypes.GET_PRO_DETAILS_FAIL,
        error : error
    }
}



export const getProDetails = id => {
    return dispatch => {
        dispatch(getProDetailsStart())

        axios.get(`${home}/api/product/details/?pid=${id}&vendorId=1`,{headers:{Authorization : apiKey}})
        .then(res=>{
            if(res.data.length == 0){
                dispatch(getProDetailsFail("error"))
            }
            else{
                dispatch(getProDetailsSuccess(res.data[0]))
            }
            
        })
        .catch(err=>{
            dispatch(getProDetailsFail(err))
        })


    }

} 