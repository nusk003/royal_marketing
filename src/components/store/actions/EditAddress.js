import * as actionTypes from './actionTypes'
import axios from 'axios'

export const editAddressStart = () =>{

    return{
        type : actionTypes.EDIT_ADDRESS_START
    }
}

export const editAddressSuccess = ()=> {

    return {
        type : actionTypes.EDIT_ADDRESS_SUCCESS
    }
}

export const editAddressFail = error =>{
    return {
        type : actionTypes.EDIT_ADDRESS_FAIL,
        error : error
    }
}

export const editAddress = (token,id,address) => {
    return dispatch => {
        dispatch(editAddressStart())

        if (token != null){

            axios.put('http://localhost:8000/api/user/updateaddress/',{id:id,address:address},{headers:{Authorization:"Token "+token}})
            .then(res=>{
                if(res.data.success){
                    dispatch(editAddressSuccess())
                }
                else{
                    dispatch(editAddressFail(res.data.message))
                }
            })
            .catch(err=>{
                dispatch(editAddressFail(err))
            })

        }

        
    }

} 