import { createSlice } from "@reduxjs/toolkit"


const initialState = {
    wishLish: []
}

export const wishlishSlice = createSlice({
    name:"wishlishSlice",
    initialState,
    reducers: {
        wishlish: (state,action) => {
        
        },
    }
})

export const { wishLish } = wishlishSlice.actions;
export default wishlishSlice.reducer;

