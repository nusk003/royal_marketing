import * as actionTypes from './actionTypes'
import axios from 'axios'
import { home, apiKey } from './keys';

export const applyPromoCodeStart = () =>{

    return{
        type : actionTypes.APPLY_PROMO_CODE_START
    }
}

export const applyPromoCodeSuccess = promo => {

    return {
        type : actionTypes.APPLY_PROMO_CODE_SUCCESS,
        discount : promo.discount
    }
}

export const applyPromoCodeFail = error =>{
    return {
        type : actionTypes.APPLY_PROMO_CODE_FAIL,
        error : error
    }
}

export const applyPromoCode = (token = null,cartTotal,promoCode) => {
    return dispatch => {
        dispatch(applyPromoCodeStart())

        if (token != null){

            axios.post(`${home}/api/cart/checkpromocode/`,{promoCode:promoCode,cartTotal:cartTotal},{headers:{Authorization:"Token "+token}})
            .then(res=>{
                if(res.data.success){
                    dispatch(applyPromoCodeSuccess(res.data))
                    if(localStorage.getItem('promoCode') == undefined){
                        localStorage.setItem('promoCode',promoCode)
                    }
                }
                else{
                    dispatch(applyPromoCodeFail(res.data.message))
                    localStorage.removeItem('promoCode')
                }
            })
            .catch(err=>{
                dispatch(applyPromoCodeFail(err.message))
                localStorage.removeItem('promoCode')
            })

        }

        else{

            

            axios.post(`${home}/api/cart/offlinepromocode/`,{promoCode:promoCode,cartTotal:cartTotal},{headers:{Authorization:apiKey}})
            .then(res=>{
                if(res.data.success){
                    dispatch(applyPromoCodeSuccess(res.data))
                    if(localStorage.getItem('promoCode') == undefined){
                        localStorage.setItem('promoCode',promoCode)
                    }
                }
                else{
                    dispatch(applyPromoCodeFail(res.data.message))
                    if(localStorage.getItem('promoCode') != undefined){
                        localStorage.removeItem('promoCode')
                    }
                }
            })
            .catch(err=>{
                dispatch(applyPromoCodeFail(err))
                if(localStorage.getItem('promoCode') != undefined){
                    localStorage.removeItem('promoCode')
                }
            })
            

        }
    }

} 