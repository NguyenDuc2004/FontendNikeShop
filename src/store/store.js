import { combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import categoriesSlice from "./categoriesSlice";
import productSlice from "./productSlice";
import authenSlice from "./authenSlice";
import  cartSlice  from "./cartSlice";
import wishlishSlice from "./wishlishSlice";


const reducer = combineReducers({
    categoriesSlice,
    productSlice,
    authenSlice,
    cartSlice,
    wishlishSlice,
})
const store = configureStore({
    reducer
});
export default store;