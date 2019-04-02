import updatedObject from '../../utility'
import * as actionTypes from '../actions/actionTypes'

const initialState = {
    loading : true,
    cats : [],
    error :null
}

const fetchTopCatsStart = (state=initialState,action) => {

    return updatedObject(state,{
            loading : true
        })

    
}

const fetchTopCatsSuccess = (state=initialState,action) => {

    return updatedObject(state,{
        loading : false,
        cats : action.cats
    })
}

const fetchTopCatsFail = (state = initialState,action) => {

    return updatedObject (state,{
        loading :false,
        error : action.error
    })
}


const topCatReducer = (state=initialState,action) => {

    switch (action.type){
        case actionTypes.FETCH_TOP_CAT_START:return fetchTopCatsStart(state,action)
        case actionTypes.FETCH_TOP_CAT_SUCCESS:return fetchTopCatsSuccess(state,action)
        case actionTypes.FETCH_TOP_CAT_FAIL:return fetchTopCatsFail(state,action)
        default : return state
    }
}

export default topCatReducer