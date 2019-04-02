import updatedObject from '../../utility'
import * as actionTypes from '../actions/actionTypes'

const initialState = {

    loading : false,
    error : null
}

const deleteAddressStart = (state=initialState,action) => {
    return updatedObject(state,{
        loading:true
    })
}

const deleteAddressSuccess = (state=initialState,action) => {
    return updatedObject(state,{
        loading:false
    })
}

const deleteAddressFail = (state=initialState,action) => {
    return updatedObject(state,{
        loading: false,
        error : action.error
    })
}

const deleteAddressReducer = (state=initialState,action) => {
    switch (action.type){
        case actionTypes.DELETE_ADDRESS_START:return deleteAddressStart(state,action)
        case actionTypes.DELETE_ADDRESS_SUCCESS: return deleteAddressSuccess(state,action)
        case actionTypes.DELETE_ADDRESS_FAIL: return deleteAddressFail(state,action)
        default : return state
    }
}

export default deleteAddressReducer