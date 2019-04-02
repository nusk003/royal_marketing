import updatedObject from '../../utility'
import * as actionTypes from '../actions/actionTypes'

const initialState = {
    discount : null,
    loading : false,
    error : null
}

const applyPromoCodeStart = (state=initialState,action) => {
    return updatedObject(state,{
        loading:true
    })
}

const applyPromoCodeSuccess = (state=initialState,action) => {
    return updatedObject(state,{
        loading:false,
        discount:action.discount
    })
}

const applyPromoCodeFail = (state=initialState,action) => {
    return updatedObject(state,{
        loading: false,
        error : action.error,
        discount : null
    })
}

const applyPromoCodeReducer = (state=initialState,action) => {
    switch (action.type){
        case actionTypes.APPLY_PROMO_CODE_START:return applyPromoCodeStart(state,action)
        case actionTypes.APPLY_PROMO_CODE_SUCCESS: return applyPromoCodeSuccess(state,action)
        case actionTypes.APPLY_PROMO_CODE_FAIL: return applyPromoCodeFail(state,action)
        default : return state
    }
}

export default applyPromoCodeReducer