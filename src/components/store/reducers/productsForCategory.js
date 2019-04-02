import updatedObject from '../../utility'
import * as actionTypes from '../actions/actionTypes'

const initialState = {
    loading : true,
    results : [],
    error :null,
    count : 0,
    next : null
}

const productCategoryStart = (state=initialState,action) => {

    return updatedObject(state,{
            loading : true
        })

}

const productCategorySuccess = (state=initialState,action) => {

    return updatedObject(state,{
        loading : false,
        results : action.results,
        count : action.count,
        next : action.next
    })
}

const productCategoryFail = (state = initialState,action) => {

    return updatedObject (state,{
        loading :false,
        error : action.error
    })
}


const productCategoryReducer = (state=initialState,action) => {

    switch (action.type){
        case actionTypes.PRODUCT_CATEGORY_START:return productCategoryStart(state,action)
        case actionTypes.PRODUCT_CATEGORY_SUCCESS:return productCategorySuccess(state,action)
        case actionTypes.PRODUCT_CATEGORY_FAIL:return productCategoryFail(state,action)
        default : return state
    }
}

export default productCategoryReducer