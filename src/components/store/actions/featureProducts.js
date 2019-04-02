import * as actionTypes from './actionTypes'
import axios from 'axios'

export const fetchFeaProStart = () => {
    return{
        type:actionTypes.FETCH_FEATURE_PRO_START
    }
}

export const fetchFeaProSuccess = pro => {

    return{
        type : actionTypes.FETCH_FEATURE_PRO_SUCCESS,
        pro : pro
    }
}

export const fetchFeaProFail = error => {

    return{
        type : actionTypes.FETCH_FEATURE_PRO_FAIL,
        error : error

    }
}

export const fetchFeaPro =  vendor => {

    return dispatch => {
        dispatch(fetchFeaProStart())
        axios.get('http://localhost:8000/api/products/featureproducts/?vendorId='+vendor)
        .then(res=>{
            dispatch(fetchFeaProSuccess(res.data))
        })
        .catch(err=>{
            dispatch(fetchFeaProFail(err))
        })
    }

}