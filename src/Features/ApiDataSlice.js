import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState={
    arr:[],

};

export const ApiDataSlice = createSlice({
    name:"apiData",
    initialState,
    reducers:{
        addData: (state, action) => {
            state.arr = action.payload; 
        }
    }
})

export const { addData } = ApiDataSlice.actions;
export default ApiDataSlice.reducer;


export const fetchData = createAsyncThunk(
    "fetchData",
    async (_, { dispatch }) => {
        const response = await axios.get("https://fakestoreapi.com/products"); 
        dispatch(addData(response.data));
    }
);
