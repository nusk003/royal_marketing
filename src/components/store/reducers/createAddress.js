import updatedObject from '../../utility'
import * as actionTypes from '../actions/actionTypes'

const initialState = {

    loading : false,
    error : null
}

const createAddressStart = (state=initialState,action) => {
    return updatedObject(state,{
        loading:true
    })
}

const createAddressSuccess = (state=initialState,action) => {
    return updatedObject(state,{
        loading:false
    })
}

const createAddressFail = (state=initialState,action) => {
    return updatedObject(state,{
        loading: false,
        error : action.error
    })
}

const createAddressReducer = (state=initialState,action) => {
    switch (action.type){
        case actionTypes.CREATE_ADDRESS_START:return createAddressStart(state,action)
        case actionTypes.CREATE_ADDRESS_SUCCESS: return createAddressSuccess(state,action)
        case actionTypes.CREATE_ADDRESS_FAIL: return createAddressFail(state,action)
        default : return state
    }
}

export default createAddressReducer