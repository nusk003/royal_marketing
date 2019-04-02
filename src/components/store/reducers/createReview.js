import updatedObject from '../../utility'
import * as actionTypes from '../actions/actionTypes'

const initialState = {

 
    loading : false,
    error : null
}

const createReviewStart = (state=initialState,action) => {
    return updatedObject(state,{
        loading:true
    })
}

const createReviewSuccess = (state=initialState,action) => {
    return updatedObject(state,{
        loading:false,
    })
}

const createReviewFail = (state=initialState,action) => {
    return updatedObject(state,{
        loading: false,
        error : action.error
    })
}

const createReviewReducer = (state=initialState,action) => {
    switch (action.type){
        case actionTypes.CREATE_REVIEW_START:return createReviewStart(state,action)
        case actionTypes.CREATE_REVIEW_SUCCESS: return createReviewSuccess(state,action)
        case actionTypes.CREATE_REVIEW_FAIL: return createReviewFail(state,action)
        default : return state
    }
}

export default createReviewReducer