import updatedObject from '../../utility'
import * as actionTypes from '../actions/actionTypes'

const initialState = {
    loading : true,
    brand : [],
    error :null
}

const fetchPopBrandStart = (state=initialState,action) => {

    return updatedObject(state,{
            loading : true
        })

}

const fetchPopBrandSuccess = (state=initialState,action) => {

    return updatedObject(state,{
        loading : false,
        brand : action.brand
    })
}

const fetchPopBrandFail = (state = initialState,action) => {

    return updatedObject (state,{
        loading :false,
        error : action.error
    })
}


const popBrandReducer = (state=initialState,action) => {

    switch (action.type){
        case actionTypes.FETCH_POP_BRANDS_START:return fetchPopBrandStart(state,action)
        case actionTypes.FETCH_POP_BRANDS_SUCCESS:return fetchPopBrandSuccess(state,action)
        case actionTypes.FETCH_POP_BRANDS_FAIL:return fetchPopBrandFail(state,action)
        default : return state
    }
}

export default popBrandReducer