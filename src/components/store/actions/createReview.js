import * as actionTypes from './actionTypes'
import axios from 'axios'
import * as actions from './index'
import { home } from './keys';

export const createReviewStart = () =>{

    return{
        type : actionTypes.CREATE_REVIEW_START
    }
}

export const createReviewSuccess = () => {

    return {
        type : actionTypes.CREATE_REVIEW_SUCCESS
    }
}

export const createReviewFail = error =>{
    return {
        type : actionTypes.CREATE_REVIEW_FAIL,
        error : error
    }
}

export const createReview = (token,review) => {
    return dispatch => {
        dispatch(createReviewStart())

        if (token != null){

            axios.post(`${home}/api/product/review/create/`,review,{headers:{Authorization:"Token "+token}})
            .then(res=>{
                if(res.data.success){

                    dispatch(createReviewSuccess())
                }
                else{
                    dispatch(createReviewFail(res.data.message))
                }
            })
            .catch(err=>{
                dispatch(createReviewFail(err.message))
            })

        }

    }

} 