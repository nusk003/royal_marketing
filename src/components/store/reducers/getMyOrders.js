import updatedObject from '../../utility'
import * as actionTypes from '../actions/actionTypes'

const initialState = {

    loading : true,
    orders : [],
    error : null,
}

const getMyOrdersStart = (state=initialState,action) => {
    return updatedObject(state,{
        loading:true
    })
}

const getMyOrdersSuccess = (state=initialState,action) => {
    return updatedObject(state,{
        loading:false,
        orders : action.orders,
        
    })
}

const getMyOrdersFail = (state=initialState,action) => {
    return updatedObject(state,{
        loading: false,
        error : action.error
    })
}

const getMyOrdersReducer = (state=initialState,action) => {
    switch (action.type){
        case actionTypes.GET_MY_ORDERS_START:return getMyOrdersStart(state,action)
        case actionTypes.GET_MY_ORDERS_SUCCESS: return getMyOrdersSuccess(state,action)
        case actionTypes.GET_MY_ORDERS_FAIL: return getMyOrdersFail(state,action)
        default : return state
    }
}

export default getMyOrdersReducer