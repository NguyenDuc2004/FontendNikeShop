import { combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import categoriesSlice from "./categoriesSlice";
import productSlice from "./productSlice";


const reducer = combineReducers({
    categoriesSlice,
    productSlice,
})
const store = configureStore({
    reducer
});
export default store;