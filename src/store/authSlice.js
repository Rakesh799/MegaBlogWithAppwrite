// Redux slice for managing authentication state  

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    status: false, // Tracks if the user is authenticated
    userData: null // Stores authenticated user's data
}

const authSlice = createSlice({
    name: "auth", // Name of this slice in the Redux store
    initialState,
    reducers: {
        login: (state, action) => {
            state.status = true;
            state.userData = action.payload.userData;
        },
        logout: (state, action) => {
            state.status = false
            state.userData = null;
        }
    }
})

export const {login, logout} = authSlice.actions; // Exported actions for dispatching
export default authSlice.reducer; // Exported reducer for the store