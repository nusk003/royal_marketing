import * as actionTypes from './actionTypes'
import axios from 'axios'
import { home } from './keys';

export const createAddressStart = () =>{

    return{
        type : actionTypes.CREATE_ADDRESS_START
    }
}

export const createAddressSuccess = ()=> {

    return {
        type : actionTypes.CREATE_ADDRESS_SUCCESS
    }
}

export const createAddressFail = error =>{
    return {
        type : actionTypes.CREATE_ADDRESS_FAIL,
        error : error
    }
}

export const createAddress = (token,address) => {
    return dispatch => {
        dispatch(createAddressStart())

        if (token != null){

            axios.post(`${home}/api/user/createaddress/`,{address:address},{headers:{Authorization:"Token "+token}})
            .then(res=>{
                if(res.data.success){
                    dispatch(createAddressSuccess())
                }
                else{
                    dispatch(createAddressFail(res.data.message))
                }
            })
            .catch(err=>{
                dispatch(createAddressFail(err))
            })

        }

        
    }

} 