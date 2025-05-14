import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    isLogin: !!localStorage.getItem("accessToken")
}
export const authenSlice = createSlice({
    name: "authenSlice",
    initialState,
    reducers: {
        LoginUser: (state, action) => {
            const { email } = action.payload;
            const userName = email.split("@")[0];
            localStorage.setItem("userName", userName);
            if (localStorage.getItem("accessToken")) {
                return {
                    ...state,
                    isLogin: true,
                }
            } else {
                return {
                    ...state,
                    isLogin: false,
                }
            }
        },
        LogoutUser: (state) => {
            localStorage.removeItem("accessToken");
            localStorage.removeItem("userName");
            localStorage.removeItem("userId");
            return {
                ...state,
                userName: "",
                isLogin: false,
            }
        }

    }
})

export const { LoginUser, LogoutUser } = authenSlice.actions;
export default authenSlice.reducer;
