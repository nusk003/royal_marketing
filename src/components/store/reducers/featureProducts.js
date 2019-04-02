import updatedObject from '../../utility'
import * as actionTypes from '../actions/actionTypes'

const initialState = {
    loading : true,
    pro : [],
    error :null
}

const fetchFeatureProStart = (state=initialState,action) => {

    return updatedObject(state,{
            loading : true
        })

    
}

const fetchFeatureProSuccess = (state=initialState,action) => {

    return updatedObject(state,{
        loading : false,
        pro : action.pro
    })
}

const fetchFeatueProFail = (state = initialState,action) => {

    return updatedObject (state,{
        loading :false,
        error : action.error
    })
}


const featureProReducer = (state=initialState,action) => {

    switch (action.type){
        case actionTypes.FETCH_FEATURE_PRO_START:return fetchFeatureProStart(state,action)
        case actionTypes.FETCH_FEATURE_PRO_SUCCESS:return fetchFeatureProSuccess(state,action)
        case actionTypes.FETCH_FEATURE_PRO_FAIL:return fetchFeatueProFail(state,action)
        default : return state
    }
}

export default featureProReducer