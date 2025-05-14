import { combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import categoriesSlice from "./categoriesSlice";
import productSlice from "./productSlice";
import authenSlice from "./authenSlice";
import  cartSlice  from "./cartSlice";


const reducer = combineReducers({
    categoriesSlice,
    productSlice,
    authenSlice,
    cartSlice,
})
const store = configureStore({
    reducer
});
export default store;