import axios from 'axios'
import * as actionTypes from './actionTypes'
import { home, apiKey } from './keys';


export const fetchPopBrandStart = () => {
    return{
        type:actionTypes.FETCH_POP_BRANDS_START
    }
}

export const fetchPopBrandSuccess = brand => {

    return{
        type : actionTypes.FETCH_POP_BRANDS_SUCCESS,
        brand : brand
    }
}

export const fetchPopBrandFail = error => {

    return{
        type : actionTypes.FETCH_POP_BRANDS_FAIL,
        error : error

    }
}

export const fetchPopBrand =  () => {
    return dispatch => {
        dispatch(fetchPopBrandStart())
        axios.get(`${home}/api/categories/popularbrands/`,{headers:{Authorization:apiKey}})
        .then(res=>{
            dispatch(fetchPopBrandSuccess(res.data))
        })
        .catch(err=>{
            dispatch(fetchPopBrandFail(err))
        })
    }

}