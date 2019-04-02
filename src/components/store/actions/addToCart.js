import * as actionTypes from './actionTypes'
import axios from 'axios'
import * as actions from './index'

export const addToCartStart = () =>{

    return{
        type : actionTypes.ADD_TO_CART_START
    }
}

export const addToCartSuccess = count => {

    return {
        type : actionTypes.ADD_TO_CART_SUCCESS
    }
}

export const addToCartFail = error =>{
    return {
        type : actionTypes.ADD_TO_CART_FAIL,
        error : error
    }
}

export const addToCart = (token = null,product) => {
    return dispatch => {
        dispatch(addToCartStart())

        if (token != null){

            axios.post('http://localhost:8000/api/cart/addtocart/?vendorId=1',product,{headers:{Authorization:"Token "+token}})
            .then(res=>{
                if(res.data.success){

                    dispatch(actions.getCartSuccess(res.data.cart))
                    dispatch(addToCartSuccess())
                }
                else{
                    dispatch(addToCartFail(res.data.message))
                }
            })
            .catch(err=>{
                dispatch(addToCartFail(err))
            })

        }

        else{

            if(localStorage.getItem('cart') === undefined){

                const cart = {
                    count : 1,
                    isDeliveryFree : null,
                    deliveryCharge : 0,
                    totalSavings : 0,
                    CartProducts :[product]
                }

                localStorage.setItem('cart',JSON.stringify(cart))
            }
            else{

                const cart =  JSON.parse(localStorage.getItem('cart'))
                
                cart.CartProducts.push(product)
                
                cart.count = cart.count + 1
                if(product.Offer != null){

                    cart.totalPrice += (product.Offer*product.qty)

                }
                else{

                    cart.totalPrice += (product.price*product.qty)
                }
                 

                localStorage.setItem('cart',JSON.stringify(cart))
            }

            dispatch(actions.getCartSuccess(JSON.parse(localStorage.getItem('cart'))))

            dispatch(addToCartSuccess())

        }
    }

} 