import axios from 'axios'
import * as actionTypes from './actionTypes'
import { home, apiKey } from './keys';


export const productSearchStart = () => {
    return{
        type:actionTypes.PRODUCT_SEARCH_START
    }
}

export const productSearchSuccess = search => {

    return{
        type : actionTypes.PRODUCT_SEARCH_SUCCESS,
        results : search.results,
        count : search.count,
        next : search.next 
    }
}

export const productSearchFail = error => {

    return{
        type : actionTypes.PRODUCT_SEARCH_FAIL,
        error : error

    }
}

export const productSearch =  (page,size,search) => {
    return dispatch => {
        dispatch(productSearchStart())
        axios.get(`${home}/api/product/suggestions/?search=${search}&page_size=${size}&page=${page}&vendorId=1`,{headers:{Authorization:apiKey}})
        .then(res=>{
            dispatch(productSearchSuccess(res.data))
        })
        .catch(err=>{
            dispatch(productSearchFail(err))
        })
    }

}