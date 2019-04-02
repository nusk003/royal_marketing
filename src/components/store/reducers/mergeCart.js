import updatedObject from '../../utility'
import * as actionTypes from '../actions/actionTypes'

const initialState = {

    loading : false,
    error : null
}

const mergeCartStart = (state=initialState,action) => {
    return updatedObject(state,{
        loading:true
    })
}

const mergeCartSuccess = (state=initialState,action) => {
    return updatedObject(state,{
        loading:false
    })
}

const mergeCartFail = (state=initialState,action) => {
    return updatedObject(state,{
        loading: false,
        error : action.error
    })
}

const mergeCartReducer = (state=initialState,action) => {
    switch (action.type){
        case actionTypes.MERGE_CART_START:return mergeCartStart(state,action)
        case actionTypes.MERGE_CART_SUCCESS: return mergeCartSuccess(state,action)
        case actionTypes.MERGE_CART_FAIL: return mergeCartFail(state,action)
        default : return state
    }
}

export default mergeCartReducer