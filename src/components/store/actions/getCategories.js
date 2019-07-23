import * as actionTypes from './actionTypes'
import axios from 'axios'
import { home, apiKey } from './keys';

export const getCategoriesStart = () =>{

    return{
        type : actionTypes.GET_CATEGORIES_START
    }
}

export const getCategoriesSuccess = categories => {

    return {
        type : actionTypes.GET_CATEGORIES_SUCCESS,
        categories : categories
    }
}

export const getCategoriesFail = error =>{
    return {
        type : actionTypes.GET_CATEGORIES_FAIL,
        error : error
    }
}



export const getCategories = () => {
    return dispatch => {
        dispatch(getCategoriesStart())

        

            axios.get(`${home}/api/categories/getcategories/`,{headers:{Authorization : apiKey}})
            .then(res=>{
                
                dispatch(getCategoriesSuccess(res.data))
            })
            .catch(err=>{
                dispatch(getCategoriesFail(err))
            })

        

        
    }

} 