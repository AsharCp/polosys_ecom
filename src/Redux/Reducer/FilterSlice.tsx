import { createSlice } from "@reduxjs/toolkit";
interface FilterState {
  selectedItems: string[];
}

const initialState: FilterState = {
  selectedItems: [],
};


export const FilterSlice = createSlice({
    name:"selected",
    initialState,
    reducers:{
        selectedProducts:(state,action)=>{
            state.selectedItems = action.payload
        }

    }
})

export const { selectedProducts } = FilterSlice.actions;
export default FilterSlice.reducer;