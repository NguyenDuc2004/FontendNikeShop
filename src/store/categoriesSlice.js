import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    OurCategory: [],
}

export const categoriesSlice = createSlice({
    name: "categoriesSlice",
    initialState,
    reducers: {
        ListCategory: (state, action) => {
            return {
                ...state,
                OurCategory: action.payload,
            }
        }
    }
});

export const { ListCategory } = categoriesSlice.actions;
export default categoriesSlice.reducer;
