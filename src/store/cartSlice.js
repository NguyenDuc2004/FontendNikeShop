// cartSlice.js
import { createSlice } from "@reduxjs/toolkit";

const storedCart = localStorage.getItem("cartItems");
let parsedCart = [];
try {
    if (storedCart && storedCart !== "undefined" && storedCart !== "null") {
        const temp = JSON.parse(storedCart);
        parsedCart = Array.isArray(temp) ? temp : [];
    }
} catch {
    parsedCart = [];
}
const initialState = {
    cartItems: parsedCart,
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
