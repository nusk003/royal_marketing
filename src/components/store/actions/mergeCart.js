import * as actionTypes from './actionTypes'
import axios from 'axios'
import * as actions from './index'

export const mergeCartStart = () =>{

    return{
        type : actionTypes.MERGE_CART_START
    }
}

export const mergeCartSuccess = () => {

    return {
        type : actionTypes.MERGE_CART_SUCCESS
    }
}

export const mergeCartFail = error =>{
    return {
        type : actionTypes.MERGE_CART_FAIL,
        error : error
    }
}

export const mergeCart = (token,cartProducts,isLogin) => {
    return dispatch => {
        dispatch(mergeCartStart())

        if (token != null){

            axios.post('http://localhost:8000/api/cart/mergecart/',cartProducts,{headers:{Authorization:"Token "+token}})
            .then(res=>{
                if(res.data.success){
                    dispatch(mergeCartSuccess())
                    const cart = {
                        totalPrice: 0,
                        count : 0,
                        isDeliveryFree : null,
                        deliveryCharge : 0,
                        totalSavings : 0,
                        CartProducts :[]
                    }

                    localStorage.setItem('cart',JSON.stringify(cart))
                }
                else{
                    dispatch(mergeCartFail(res.data.message))
                }
            })
            .catch(err=>{
                dispatch(mergeCartFail(err.message))
            })

            localStorage.setItem('token',token)

            dispatch(actions.authSuccess(token,isLogin))

            dispatch(actions.hideAuth())
            if(!isLogin){
                dispatch(actions.showName())
            
            }

        
    }

}
} 