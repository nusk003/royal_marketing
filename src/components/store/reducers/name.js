import updatedObject from '../../utility'
import * as actionTypes from '../actions/actionTypes'

const initialState = {
    
    loading : false,
    error: null,
    isShow : false
}

const showName = (state,action) => {

    return updatedObject(state,{
        isShow : true,
        
    })
}

const hideName = (state,action) => {
    return updatedObject(state,{
        isShow:false
    })
}

const nameStart = (state,action) =>{
    return updatedObject(state,{
        loading : true
    })
}

const nameSuccess = (state,action) => {
    return updatedObject(state,{
       
       loading:false,
       isShow:false,
       
    })
}

const nameFail = (state,action) => {
    return updatedObject(state,{
        loading:false,
        error:action.error
    })
}

const nameReducer = (state=initialState,action) => {

    switch (action.type){
        case actionTypes.NAME_START:return nameStart(state,action)
        case actionTypes.NAME_SUCCESS:return nameSuccess(state,action)
        case actionTypes.NAME_FAIL:return nameFail(state,action)
        case actionTypes.SHOW_NAME : return showName(state,action)
        case actionTypes.HIDE_NAME : return hideName(state,action)
        default: return state
    }
}

export default nameReducer