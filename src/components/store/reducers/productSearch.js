import updatedObject from '../../utility'
import * as actionTypes from '../actions/actionTypes'

const initialState = {
    loading : true,
    results : [],
    error :null,
    count : 0,
    next : null
}

const productSearchStart = (state=initialState,action) => {

    return updatedObject(state,{
            loading : true
        })

}

const productSearchSuccess = (state=initialState,action) => {

    return updatedObject(state,{
        loading : false,
        results : action.results,
        count : action.count,
        next : action.next
    })
}

const productSearchFail = (state = initialState,action) => {

    return updatedObject (state,{
        loading :false,
        error : action.error
    })
}


const productSearchReducer = (state=initialState,action) => {

    switch (action.type){
        case actionTypes.PRODUCT_SEARCH_START:return productSearchStart(state,action)
        case actionTypes.PRODUCT_SEARCH_SUCCESS:return productSearchSuccess(state,action)
        case actionTypes.PRODUCT_SEARCH_FAIL:return productSearchFail(state,action)
        default : return state
    }
}

export default productSearchReducer