import * as actionTypes from './actionTypes'
import axios from 'axios'
import { home } from './keys';

export const deleteAddressStart = () =>{

    return{
        type : actionTypes.DELETE_ADDRESS_START
    }
}

export const deleteAddressSuccess = ()=> {

    return {
        type : actionTypes.DELETE_ADDRESS_SUCCESS
    }
}

export const deleteAddressFail = error =>{
    return {
        type : actionTypes.DELETE_ADDRESS_FAIL,
        error : error
    }
}

export const deleteAddress = (token,id) => {
    return dispatch => {
        dispatch(deleteAddressStart())

        if (token != null){

            axios.put(`${home}/api/user/deleteaddress/`,{id:id},{headers:{Authorization:"Token "+token}})
            .then(res=>{
                if(res.data.success){
                    dispatch(deleteAddressSuccess())
                }
                else{
                    dispatch(deleteAddressFail(res.data.message))
                }
            })
            .catch(err=>{
                dispatch(deleteAddressFail(err))
            })

        }

        
    }

} 