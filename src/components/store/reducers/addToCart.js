import updatedObject from '../../utility'
import * as actionTypes from '../actions/actionTypes'

const initialState = {

    loading : false,
    error : null
}

const addToCartStart = (state=initialState,action) => {
    return updatedObject(state,{
        loading:true
    })
}

const addToCartSuccess = (state=initialState,action) => {
    return updatedObject(state,{
        loading:false
    })
}

const addToCartFail = (state=initialState,action) => {
    return updatedObject(state,{
        loading: false,
        error : action.error
    })
}

const addToCartReducer = (state=initialState,action) => {
    switch (action.type){
        case actionTypes.ADD_TO_CART_START:return addToCartStart(state,action)
        case actionTypes.ADD_TO_CART_SUCCESS: return addToCartSuccess(state,action)
        case actionTypes.ADD_TO_CART_FAIL: return addToCartFail(state,action)
        default : return state
    }
}

export default addToCartReducer