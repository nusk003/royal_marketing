import * as actionTypes from './actionTypes'
import axios from 'axios'
import { home, apiKey } from './keys';

export const getHeroSliderStart = () =>{

    return{
        type : actionTypes.GET_HEROSLIDER_START
    }
}

export const getHeroSliderSuccess = slides => {

    return {
        type : actionTypes.GET_HEROSLIDER_SUCCESS,
        slides : slides
    }
}

export const getHeroSliderFail = error =>{
    return {
        type : actionTypes.GET_HEROSLIDER_FAIL,
        error : error
    }
}



export const getHeroSlider = () => {
    return dispatch => {
        dispatch(getHeroSliderStart())

        

            axios.get(`${home}/api/utills/getheroslider/`,{headers:{Authorization : apiKey}})
            .then(res=>{
                
                dispatch(getHeroSliderSuccess(res.data))
            })
            .catch(err=>{
                dispatch(getHeroSliderFail(err))
            })

        

        
    }

} 