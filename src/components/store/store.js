import { configureStore } from "@reduxjs/toolkit";
import beachSlice from "./beachSlice";

const store = configureStore({
    reducer: {
        dataBeach: beachSlice
    }
})

export default store