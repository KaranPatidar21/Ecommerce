import { configureStore } from "@reduxjs/toolkit";
import apidataReducer from "../src/Features/ApiDataSlice";
export const Store = configureStore({
    reducer:{
        apiData : apidataReducer,
    },
})
export default Store;