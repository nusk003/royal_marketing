import updatedObject from '../../utility'
import * as actionTypes from '../actions/actionTypes'

const initialState = {

    loading : false,
    error : null
}

const updateCartStart = (state=initialState,action) => {
    return updatedObject(state,{
        loading:true
    })
}

const updateCartSuccess = (state=initialState,action) => {
    return updatedObject(state,{
        loading:false
    })
}

const updateCartFail = (state=initialState,action) => {
    return updatedObject(state,{
        loading: false,
        error : action.error
    })
}

const updateCartReducer = (state=initialState,action) => {
    switch (action.type){
        case actionTypes.UPDATE_CART_START:return updateCartStart(state,action)
        case actionTypes.UPDATE_CART_SUCCESS: return updateCartSuccess(state,action)
        case actionTypes.UPDATE_CART_FAIL: return updateCartFail(state,action)
        default : return state
    }
}

export default updateCartReducer