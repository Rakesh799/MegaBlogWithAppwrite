// we can make this in a separate folder or directly in store folder. As per our confort. 
//this is made to track authentication. we will always ask our store that our user is authenticated or not.  

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    status: false,
    userData: null
}

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        login: (state, action) => {
            state.status = true;
            state.userData = action.payload.userData;
        },
        logout: (state, action) => {
            state.status = false
            userData = null;
        }
    }
})

export const {login, logout} = authSlice.actions;
export default authSlice.reducer;