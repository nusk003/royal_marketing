import * as actionTypes from './actionTypes'
import axios from 'axios'
import authSuccess from './auth'
import { home } from './keys';

export const showName = () => {
    return{
        type:actionTypes.SHOW_NAME
    }
}

export const hideName = () => {
    return{
        type:actionTypes.HIDE_NAME
    }
}

export const nameStart = () => {

    return{
        type:actionTypes.NAME_START,
    }

}

export const nameSuccess = () => {

    return{
        type:actionTypes.NAME_SUCCESS
    }
}

export const nameFail = error =>{

    return{
        type: actionTypes.NAME_FAIL,
        error: error
    }
}



export const updateName = (name,token) => {

    return dispatch => {
        dispatch(nameStart())
        axios.put(`${home}/api/user/updatename`,{name:name},{headers:{Authorization:"Token "+token}})
        .then(response=>{

            if(response.data.success){
                dispatch(nameSuccess())
            }

            else{
                dispatch(nameFail(response.data.message))
            }
           
            
        })

        .catch(error=>{
            dispatch(nameFail(error.message))
        })
    }

}


