import axios from 'axios'
import * as actionTypes from './actionTypes'


export const productCategoryStart = () => {
    return{
        type:actionTypes.PRODUCT_CATEGORY_START
    }
}

export const productCategorySuccess = search => {

    return{
        type : actionTypes.PRODUCT_CATEGORY_SUCCESS,
        results : search.results,
        count : search.count,
        next : search.next 
    }
}

export const productCategoryFail = error => {

    return{
        type : actionTypes.PRODUCT_CATEGORY_FAIL,
        error : error

    }
}

export const productForCategory =  (page,size,cat) => {

    return dispatch => {
        dispatch(productCategoryStart())
        axios.get('http://localhost:8000/api/product/getproducts/?'+cat+'&page_size='+size+'&page='+page+'&vendorId=1')
        .then(res=>{
            dispatch(productCategorySuccess(res.data))
        })
        .catch(err=>{
            dispatch(productCategoryFail(err))
        })
    }

}