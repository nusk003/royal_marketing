import updatedObject from '../../utility'
import * as actionTypes from '../actions/actionTypes'

const initialState = {

    loading : false,
    error : null
}

const editAddressStart = (state=initialState,action) => {
    return updatedObject(state,{
        loading:true
    })
}

const editAddressSuccess = (state=initialState,action) => {
    return updatedObject(state,{
        loading:false
    })
}

const editAddressFail = (state=initialState,action) => {
    return updatedObject(state,{
        loading: false,
        error : action.error
    })
}

const editAddressReducer = (state=initialState,action) => {
    switch (action.type){
        case actionTypes.EDIT_ADDRESS_START:return editAddressStart(state,action)
        case actionTypes.EDIT_ADDRESS_SUCCESS: return editAddressSuccess(state,action)
        case actionTypes.EDIT_ADDRESS_FAIL: return editAddressFail(state,action)
        default : return state
    }
}

export default editAddressReducer