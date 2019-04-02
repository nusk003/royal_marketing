import axios from 'axios'
import * as actionTypes from './actionTypes'


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
        axios.get('http://localhost:8000/api/categories/popularbrands/')
        .then(res=>{
            dispatch(fetchPopBrandSuccess(res.data))
        })
        .catch(err=>{
            dispatch(fetchPopBrandFail(err))
        })
    }

}