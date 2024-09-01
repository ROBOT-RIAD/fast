import axios from 'axios';
import * as actionTypes from './actionTypes';

export const addIngredient = igtype =>{
    return {
        type: actionTypes.ADD_INGREDIENT,
        payload: igtype,
    }
}

export const removeIngredient = igtype =>{
    return {
        type: actionTypes.REMOVE_INGREDIENT,
        payload: igtype,
    }
}

export const updatePurchasable =()=>{
    return {
        type: actionTypes.UPDATE_PURCHASABLE,
    }
}


export const resetIngredient=()=>{
    return {
        type: actionTypes.RESET_INGREDIENT,
    }
}

export const loadOrders = orders =>{
    return {
        type: actionTypes.LOAD_ORDERS,
        payload: orders,
    }
} 

export const orderLoadFailed =()=>{
    return{
        type: actionTypes.ORDER_LOAD_FAILED,
    }
}


export const fetchOrders = (token,userId) => dispatch => {
    const header ={
        'headers' :{
            'Authorization':`Bearer ${token}`
        }
    }
    
    axios.get(`https://fast-food-nzvp.onrender.com/burger/all/?id=${userId}`,header)
        .then(response => {
            const ordersArray = Object.values(response.data);
            dispatch(loadOrders(ordersArray));
        })
        .catch(error => {
            dispatch(orderLoadFailed());
        });
};
  