import updatedObject from '../../utility'
import * as actionTypes from '../actions/actionTypes'

const initialState = {
    
    token : null,
    loading: false,
    isShow : false,
    error : null
}

const authShow = (state,action) => {

    return updatedObject(state,{
        isShow : true
    })
}


const authHide = (state,action) => {

    return updatedObject(state,{
        isShow : false
    })
}

const authStart = (state,action) =>{
    return updatedObject(state,{
        loading : true
    })
}

const authSuccess = (state,action) => {
    return updatedObject(state,{
       token : action.token,
       loading:false,
       isShow:false,
       
    })
}

const authFail = (state,action) => {
    return updatedObject(state,{
        loading:false,
        error:action.error
    })
}

const authReducer = (state=initialState,action) => {

    switch (action.type){
        case actionTypes.AUTH_START:return authStart(state,action)
        case actionTypes.AUTH_SUCCESS:return authSuccess(state,action)
        case actionTypes.AUTH_FAIL:return authFail(state,action)
        case actionTypes.SHOW_AUTH:return authShow(state,action)
        case actionTypes.HIDE_AUTH : return authHide(state,action)
        default: return state
    }
}

export default authReducer