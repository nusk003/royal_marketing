import updatedObject from '../../utility'
import * as actionTypes from '../actions/actionTypes'

const initialState = {

    loading : true,
    slides:[],
    error : null
}

const getHeroSliderStart = (state=initialState,action) => {
    return updatedObject(state,{
        loading:true
    })
}

const getHeroSliderSuccess = (state=initialState,action) => {
    return updatedObject(state,{
        loading:false,
        slides : action.slides
    })
}

const getHeroSliderFail = (state=initialState,action) => {
    return updatedObject(state,{
        loading: false,
        error : action.error
    })
}

const getHeroSliderReducer = (state=initialState,action) => {
    switch (action.type){
        case actionTypes.GET_HEROSLIDER_START:return getHeroSliderStart(state,action)
        case actionTypes.GET_HEROSLIDER_SUCCESS: return getHeroSliderSuccess(state,action)
        case actionTypes.GET_HEROSLIDER_FAIL: return getHeroSliderFail(state,action)
        default : return state
    }
}

export default getHeroSliderReducer