import updatedObject from '../../utility'
import * as actionTypes from '../actions/actionTypes'

const initialState = {

    message : null,
    loading : false,
    error : null
}

const createOrderStart = (state=initialState,action) => {
    return updatedObject(state,{
        loading:true
    })
}

const createOrderSuccess = (state=initialState,action) => {
    return updatedObject(state,{
        loading:false,
        message : action.message
    })
}

const createOrderFail = (state=initialState,action) => {
    return updatedObject(state,{
        loading: false,
        error : action.error
    })
}

const createOrderReducer = (state=initialState,action) => {
    switch (action.type){
        case actionTypes.CREATE_ORDER_START:return createOrderStart(state,action)
        case actionTypes.CREATE_ORDER_SUCCESS: return createOrderSuccess(state,action)
        case actionTypes.CREATE_ORDER_FAIL: return createOrderFail(state,action)
        default : return state
    }
}

export default createOrderReducer