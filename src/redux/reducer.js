
import * as actionTypes from './actionTypes'


const INGREDIENT_PRICES ={
    salad:20,
    cheese :40,
    meat:90,
}
  
const INITIAL_STATE ={
    ingredients :[
        {type : 'salad' , amount :0},
        {type : 'cheese' ,amount :0},
        {type : 'meat' ,amount:0 },
      ],
      orders: [],
      orderLoading: true,
      orderErr: false,
      totalPrice: 60,
      putchasable: false,
      token: null,
      userId : null,
      authLoading: false,
      authFailedMsg: null,
}

export const reducer = (state =INITIAL_STATE,action) =>{
    const ingredients =[...state.ingredients];
    switch(action.type){
        case actionTypes.ADD_INGREDIENT:
            for(let item of ingredients)
            {
               if(item.type === action.payload) item.amount++;
            }
            return {
                ...state,
                ingredients: ingredients,
                totalPrice: state.totalPrice + INGREDIENT_PRICES[action.payload],
            }
        case actionTypes.REMOVE_INGREDIENT:
            for(let item of ingredients)
            {
              if(item.type === action.payload)
              {
                if(item.amount > 0)
                {
                  item.amount--;
                }
                else
                {
                  return state;
                }
              }
            }
            return {
                ...state,
                ingredients: ingredients,
                totalPrice: state.totalPrice - INGREDIENT_PRICES[action.payload],
            }
        case actionTypes.UPDATE_PURCHASABLE:
            const sum = state.ingredients.reduce((sum,element)=>{
                return sum+element.amount;
            },0);

            return{
                ...state,
                putchasable: sum>0,
            }
        case actionTypes.RESET_INGREDIENT:
            return {
                ...state,
                ingredients :[
                    {type : 'salad' , amount :0},
                    {type : 'cheese' ,amount :0},
                    {type : 'meat' ,amount:0 },
                  ],
                  totalPrice: 60,
                  putchasable: false,

            }

        case actionTypes.LOAD_ORDERS:
                return {
                    ...state,
                    orders: action.payload,  
                    orderLoading: false,
                };
        case actionTypes.ORDER_LOAD_FAILED:
            return {
                ...state,
                orderErr: true,
                orderLoading: false,
            };

        case actionTypes.AUTH_SUCCESS:
            return{
                ...state,
                token: action.payload.token,
                userId: action.payload.userId,

            }
        case actionTypes.AUTH_LOGOUT:
            return {
                ...state,
                token: null,
                userId: null,
                authFailedMsg: null,
            }
        case actionTypes.AUTH_LOADING:
            return {
                ...state,
                authLoading: action.payload,

            }
        case actionTypes.AUTH_FAILED:
            return {
                ...state,
                authFailedMsg: action.payload,

            }
           
        default:
            return state
    }     
}