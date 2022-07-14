import { combineReducers } from "redux";
import { productsReducer } from "./actionReducers/actionReducers";
import { selectedProductReducer } from "./actionReducers/actionReducers";
import { removeProductReducer } from "./actionReducers/actionReducers";

export const rootReducer=combineReducers({ 
    allProducts:productsReducer,
    products:selectedProductReducer 
 }
)