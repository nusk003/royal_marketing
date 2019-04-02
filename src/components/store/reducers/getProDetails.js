import updatedObject from '../../utility'
import * as actionTypes from '../actions/actionTypes'

const initialState = {

    loading : true,
    details : {},
    error : null,
}

const getProDetailsStart = (state=initialState,action) => {
    return updatedObject(state,{
        loading:true
    })
}

const getProDetailsSuccess = (state=initialState,action) => {
    return updatedObject(state,{
        loading:false,
        details: action.details,
    })
}

const getProDetailsFail = (state=initialState,action) => {
    return updatedObject(state,{
        loading: false,
        error : action.error
    })
}

const getProDetailsReducer = (state=initialState,action) => {
    switch (action.type){
        case actionTypes.GET_PRO_DETAILS_START:return getProDetailsStart(state,action)
        case actionTypes.GET_PRO_DETAILS_SUCCESS: return getProDetailsSuccess(state,action)
        case actionTypes.GET_PRO_DETAILS_FAIL: return getProDetailsFail(state,action)
        default : return state
    }
}

export default getProDetailsReducer