import * as actionTypes  from './actionTypes'
import axios from 'axios'

export const getMyOrdersStart = () => {
    return {
        type : actionTypes.GET_MY_ORDERS_START
    }
}

export const getMyOrdersSuccess = orders => {

    return {
        type : actionTypes.GET_MY_ORDERS_SUCCESS,
        orders : orders
    }
}

export const getMyOrdersFail = err => {
    return {
        type : actionTypes.GET_MY_ORDERS_FAIL,
        error : err
    }
}

export const getMyOrders = token => {
    return dispatch => {
        dispatch (getMyOrdersStart())
        axios.get('http://localhost:8000/api/user/orders/',{headers:{Authorization:"Token "+token}})
        .then(res=>{
            dispatch(getMyOrdersSuccess(res.data))
        })
        .catch(err=>{
            dispatch(getMyOrdersFail(err))
        })
    }
    
}
