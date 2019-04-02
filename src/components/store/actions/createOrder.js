import * as actionTypes from './actionTypes'
import axios from 'axios'

export const createOrderStart = () =>{

    return{
        type : actionTypes.CREATE_ORDER_START
    }
}

export const createOrderSuccess = (message)=> {

    return {
        type : actionTypes.CREATE_ORDER_SUCCESS,
        message : message
    }
}

export const createOrderFail = error =>{
    return {
        type : actionTypes.CREATE_ORDER_FAIL,
        error : error
    }
}

export const createOrder = (token,orders) => {
    return dispatch => {
        dispatch(createOrderStart())

        if (token != null){

            axios.post('http://localhost:8000/api/orders/create/?vendorId=1',orders,{headers:{Authorization:"Token "+token}})
            .then(res=>{
                if(res.data.success){
                    dispatch(createOrderSuccess(res.data.message))
                }
                else{
                    dispatch(createOrderFail(res.data.message))
                }
            })
            .catch(err=>{
                dispatch(createOrderFail(err.message))
            })

        }

        
    }

} 