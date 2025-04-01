import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    bestSeller: [],
    newArrivals: [],
}
export const productSlice = createSlice({
    name: "productSlice",
    initialState,
    reducers: {
        bestSeller: (state, action) => {
            return {
                ...state,
                bestSeller: action.payload,
            }
        },
        newArrivals: (state, action) => {
            return {
                ...state,
                newArrivals: action.payload,
            }
        }
    }
})
export const { bestSeller, newArrivals } = productSlice.actions;
export default productSlice.reducer;