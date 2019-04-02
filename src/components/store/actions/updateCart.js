import * as actionTypes from './actionTypes'
import axios from 'axios'
import * as actions from './index'

export const updateCartStart = () =>{

    return{
        type : actionTypes.UPDATE_CART_START
    }
}

export const updateCartSuccess = count => {

    return {
        type : actionTypes.UPDATE_CART_SUCCESS
    }
}

export const updateCartFail = error =>{
    return {
        type : actionTypes.UPDATE_CART_FAIL,
        error : error
    }
}

export const updateCart = (token = null,cartProId,qty) => {
    return dispatch => {
        dispatch(updateCartStart())

        if (token != null){

            axios.put('http://localhost:8000/api/cart/updatecart/?vendorId=1',{cartProductId:cartProId,qty:qty},{headers:{Authorization:"Token "+token}})
            .then(res=>{
                if(res.data.success){
                    dispatch(actions.getCartSuccess(res.data.cart))
                    dispatch(updateCartSuccess())
                }
                else{
                    dispatch(updateCartFail(res.data.message))
                }
            })
            .catch(err=>{
                dispatch(updateCartFail(err))
            })

        }

        else{

           const cart = JSON.parse(localStorage.getItem('cart'))
           const cp = cart.CartProducts[cartProId]
           cp.qty = qty

           cart.CartProducts[cartProId] = cp
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

           //alert(cart.count)

           cart.totalPrice = tp

           cart.count = count

           localStorage.setItem('cart',JSON.stringify(cart))
           dispatch(actions.getCartSuccess(JSON.parse(localStorage.getItem('cart'))))
            dispatch(updateCartSuccess())

        }
    }

} 