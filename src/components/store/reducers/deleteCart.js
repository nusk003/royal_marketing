import updatedObject from '../../utility'
import * as actionTypes from '../actions/actionTypes'

const initialState = {

    loading : false,
    error : null
}

const deleteCartStart = (state=initialState,action) => {
    return updatedObject(state,{
        loading:true
    })
}

const deleteCartSuccess = (state=initialState,action) => {
    return updatedObject(state,{
        loading:false
    })
}

const deleteCartFail = (state=initialState,action) => {
    return updatedObject(state,{
        loading: false,
        error : action.error
    })
}

const deleteCartReducer = (state=initialState,action) => {
    switch (action.type){
        case actionTypes.DELETE_CART_START:return       deleteCartStart(state,action)
        case actionTypes.DELETE_CART_SUCCESS: return    deleteCartSuccess(state,action)
        case actionTypes.DELETE_CART_FAIL: return       deleteCartFail(state,action)
        default : return state
    }
}

export default deleteCartReducer