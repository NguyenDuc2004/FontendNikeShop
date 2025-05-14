// cartSlice.js
import { createSlice } from "@reduxjs/toolkit";

const storedCart = localStorage.getItem("cartItems");
const initialState = {
    cartItems: storedCart ? JSON.parse(storedCart) : [], // Chỉ parse nếu có dữ liệu hợp lệ
};

export const cartSlice = createSlice({
    name: "cartSlice",
    initialState,
    reducers: {
        addToCart: (state, action) => {
            state.cartItems = action.payload;
        },
    },
});

export const { addToCart } = cartSlice.actions;
export default cartSlice.reducer;
