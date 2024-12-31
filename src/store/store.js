// we can make store in root folder or in src folder as per our confort.
import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./authSlice";

const store = configureStore({
    reducer: {
        auth: authSlice
    }
})

export default store