import updatedObject from '../../utility'
import * as actionTypes from '../actions/actionTypes'

const initialState = {

    loading : true,
    error : null,
    categories : []
}

const getCategoriesStart = (state=initialState,action) => {
    return updatedObject(state,{
        loading:true
    })
}

const getCategoriesSuccess = (state=initialState,action) => {
    return updatedObject(state,{
        loading:false,
        categories : action.categories
    })
}

const getCategoriesFail = (state=initialState,action) => {
    return updatedObject(state,{
        loading: false,
        error : action.error
    })
}

const getCategoriesReducer = (state=initialState,action) => {
    switch (action.type){
        case actionTypes.GET_CATEGORIES_START:return getCategoriesStart(state,action)
        case actionTypes.GET_CATEGORIES_SUCCESS: return getCategoriesSuccess(state,action)
        case actionTypes.GET_CATEGORIES_FAIL: return getCategoriesFail(state,action)
        default : return state
    }
}

export default getCategoriesReducer