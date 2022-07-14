import { ActionTypes } from "../actionTypes/actionTypes"

const initState={
   products:[]
}

export const productsReducer=(state=initState,{type,payload})=>{
switch(type){
case ActionTypes.SET_PRODUCT:return{
    ...state,
     products:payload
}
default:return state
}
}

export const selectedProductReducer=(state=initState,{type,payload})=>{
    switch(type){
        case ActionTypes.SELECTED_PRODUCT:return{
            ...state,
            ...payload
        }
        case ActionTypes.REMOVE_PRODUCT:return{}
        default:return state;
    }
}

