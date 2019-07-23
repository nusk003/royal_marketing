import * as actionTypes from './actionTypes'
import axios from 'axios'
import { home, apiKey } from './keys';

export const fetchTopCatsStart = () => {
    return{
        type:actionTypes.FETCH_TOP_CAT_START
    }
}

export const fetchTopCatsSuccess = cats => {

    return{
        type : actionTypes.FETCH_TOP_CAT_SUCCESS,
        cats : cats
    }
}

export const fetchTopCatsFail = error => {

    return{
        type : actionTypes.FETCH_TOP_CAT_FAIL,
        error : error

    }
}

export const fetchTopCats =  () => {

    return dispatch => {
        dispatch(fetchTopCatsStart())
        axios.get(`${home}/api/categories/topcategories/`,{headers:{Authorization : apiKey}})
        .then(res=>{
            dispatch(fetchTopCatsSuccess(res.data))
        })
        .catch(err=>{
            dispatch(fetchTopCatsFail(err))
        })
    }

}