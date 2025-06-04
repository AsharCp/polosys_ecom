import { createSlice } from "@reduxjs/toolkit";


export const SearchSlice =  createSlice({
    name:"search",
    initialState:{
        query:''
    },
    reducers:{
        searchProduct:(state,action)=>{
            state.query=action.payload

        }

    }
})

export const { searchProduct } = SearchSlice.actions;
export default SearchSlice.reducer