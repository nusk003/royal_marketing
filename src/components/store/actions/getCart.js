import * as actionTypes from './actionTypes'
import axios from 'axios'

export const getCartStart = () =>{

    return{
        type : actionTypes.GET_CART_START
    }
}

export const getCartSuccess = cart => {

    return {
        type : actionTypes.GET_CART_SUCCESS,
        cart : cart.CartProducts,
        totalPrice: cart.totalPrice,
        count : cart.count,
    }
}

export const getCartFail = error =>{
    return {
        type : actionTypes.GET_CART_FAIL,
        error : error
    }
}



export const getCart = (token = null) => {
    return dispatch => {
        dispatch(getCartStart())

        if (token != null){

            axios.get('http://localhost:8000/api/cart/getcart/?vendorId=1',{headers:{Authorization:"Token "+token}})
            .then(res=>{
                
                dispatch(getCartSuccess(res.data[0]))
            })
            .catch(err=>{
                dispatch(getCartFail(err))
            })

        }

        else{

            if(localStorage.getItem('cart') == undefined){
                
                dispatch(getCartSuccess({}))

            }

            else{
              
                dispatch(getCartSuccess(JSON.parse(localStorage.getItem('cart'))))

            }


        }
    }

} 