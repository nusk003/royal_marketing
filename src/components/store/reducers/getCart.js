import updatedObject from '../../utility'
import * as actionTypes from '../actions/actionTypes'

const initialState = {

    loading : true,
    cart : [],
    totalPrice:0,
    count : 0,
    error : null,
}

const getCartStart = (state=initialState,action) => {
    return updatedObject(state,{
        loading:true
    })
}

const getCartSuccess = (state=initialState,action) => {
    return updatedObject(state,{
        loading:false,
        cart : action.cart,
        totalPrice : action.totalPrice,
        count : action.count,
    })
}

const getCartFail = (state=initialState,action) => {
    return updatedObject(state,{
        loading: false,
        error : action.error
    })
}

const getCartReducer = (state=initialState,action) => {
    switch (action.type){
        case actionTypes.GET_CART_START:return getCartStart(state,action)
        case actionTypes.GET_CART_SUCCESS: return getCartSuccess(state,action)
        case actionTypes.GET_CART_FAIL: return getCartFail(state,action)
        default : return state
    }
}

export default getCartReducer