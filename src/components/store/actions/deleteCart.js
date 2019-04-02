import * as actionTypes from './actionTypes'
import axios from 'axios'
import * as actions from './index'

export const deleteCartStart = () =>{

    return{
        type : actionTypes.DELETE_CART_START
    }
}

export const deleteCartSuccess = count => {

    return {
        type : actionTypes.DELETE_CART_SUCCESS
    }
}

export const deleteCartFail = error =>{
    return {
        type : actionTypes.DELETE_CART_FAIL,
        error : error
    }
}

export const deleteCart = (token = null,cartProId) => {
    return dispatch => {
        dispatch(deleteCartStart())

        if (token != null){

            axios.put('http://localhost:8000/api/cart/deletecart/?vendorId=1',{cartProductId:cartProId},{headers:{ Authorization : "Token "+token}})
            .then(res=>{
                if(res.data.success){
                    dispatch(actions.getCartSuccess(res.data.cart))
                    dispatch(deleteCartSuccess())
                }
                else{
                    dispatch(deleteCartFail(res.data.message))
                }
            })
            .catch(err=>{
                dispatch(deleteCartFail(err))
            })

        }

        else{

            const cart = JSON.parse(localStorage.getItem('cart'))
            cart.CartProducts.splice(cartProId,1)

            let tp = 0
            let count = 0
            for(let cartPro of cart.CartProducts){

                count += parseInt(cartPro.qty)
                if (cartPro.Offer == null){
                     tp += (cartPro.price*cartPro.qty)
                }
                else{
                    tp += (cartPro.Offer*cartPro.qty)
                }

            }

           cart.totalPrice = tp

           cart.count = count

            localStorage.setItem('cart',JSON.stringify(cart))

            dispatch(actions.getCartSuccess(JSON.parse(localStorage.getItem('cart'))))
            dispatch(deleteCartSuccess())
                   
        }
    }

} 