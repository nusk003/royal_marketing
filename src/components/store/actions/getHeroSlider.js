import * as actionTypes from './actionTypes'
import axios from 'axios'

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

        

            axios.get('http://localhost:8000/api/utills/getheroslider/')
            .then(res=>{
                
                dispatch(getHeroSliderSuccess(res.data))
            })
            .catch(err=>{
                dispatch(getHeroSliderFail(err))
            })

        

        
    }

} 