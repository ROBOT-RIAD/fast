
import * as actionTypes from './actionTypes';
import axios from 'axios';
import { jwtDecode } from 'jwt-decode';

export const authSuccess = (token, userId) => {
    return {
        type: actionTypes.AUTH_SUCCESS,
        payload: {
            token: token,
            userId: userId,
        }
    };
};

export const authLoading =  isLoading => {
    return {
        type: actionTypes.AUTH_LOADING,
        payload: isLoading,
    }
}

export const authFailedMsg = errMsg =>{
    return {

        type: actionTypes.AUTH_FAILED,
        payload: errMsg,

    }

}

const saveTokenDataandgetuserId = access => {
    const token = jwtDecode(access)
    localStorage.setItem('token',access);
    localStorage.setItem('userId',token.user_id);
    const expirationsTime = new Date( token.exp * 1000);
    localStorage.setItem('expirationsTime',expirationsTime);
    return token.user_id;
}

export const auth = (email, password, mode) => dispatch => {
    dispatch(authLoading(true));
    const authData = {
        email: email,
        password: password,
    };

    let authUrl = mode === "Sign Up" 
        ? "https://fast-food-nzvp.onrender.com/account/users/" 
        : "https://fast-food-nzvp.onrender.com/account/token/";

    

    axios.post(authUrl, authData)
        .then(response => {
            dispatch(authLoading(false));
            if(mode !== "Sign Up")
            {
               const access = response.data.access;
               const user_id = saveTokenDataandgetuserId(access);
               dispatch(authSuccess(access, user_id));
            }
            else{
               return axios.post("https://fast-food-nzvp.onrender.com/account/token/",authData)
               .then(response => {
                const access = response.data.access;
                const user_id = saveTokenDataandgetuserId(access);
                dispatch(authSuccess(access, user_id));

               })
            }
        })
        .catch(error => {
            dispatch(authLoading(false));
            const key = Object.keys(error.response.data)[0]
            let errvalue = error.response.data[key];
            if( errvalue === "No active account found with the given credentials")
                {
                    errvalue ="Your account Created Check your Email and active";
                }
            dispatch(authFailedMsg(`${errvalue}`));
        });
};



export const logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('expirationsTime');
    localStorage.removeItem('userId');
    return {
        type: actionTypes.AUTH_LOGOUT,
    }
}






export const authCheck = () => dispatch =>{
    const token = localStorage.getItem('token');
    if(!token)
    {
        dispatch(logout());

    }
    else
    {
        const expirationsTime =new Date(localStorage.getItem('expirationsTime'));
        if(expirationsTime <= new Date())
        {
            dispatch(logout());
        }
        else
        {
           const userId = localStorage.getItem('userId'); 
           dispatch(authSuccess(token,userId));
        }
    }
}


