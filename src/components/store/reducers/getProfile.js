import updatedObject from '../../utility'
import * as actionTypes from '../actions/actionTypes'

const initialState = {

    loading : true,
    profile : null,
    error : null,
}

const getProfileStart = (state=initialState,action) => {
    return updatedObject(state,{
        loading:true
    })
}

const getProfileSuccess = (state=initialState,action) => {
    return updatedObject(state,{
        loading:false,
        profile : action.profile,
        
    })
}

const getProfileFail = (state=initialState,action) => {
    return updatedObject(state,{
        loading: false,
        error : action.error
    })
}

const getProfileReducer = (state=initialState,action) => {
    switch (action.type){
        case actionTypes.GET_PROFILE_START:return getProfileStart(state,action)
        case actionTypes.GET_PROFILE_SUCCESS: return getProfileSuccess(state,action)
        case actionTypes.GET_PROFILE_FAIL: return getProfileFail(state,action)
        default : return state
    }
}

export default getProfileReducer