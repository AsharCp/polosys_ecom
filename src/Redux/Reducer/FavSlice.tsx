import { createSlice } from "@reduxjs/toolkit";
import type { Product } from "./ProductSlice";

interface FavState{
    favItems: Product[],
}
const initialState : FavState = {
    favItems:[],

}

export const FavSlice = createSlice({
    name:"fav",
    initialState,
    reducers:{
        updateFavorite:(state,action)=>{
            const { newItem,type} = action.payload;
            if(type==="add"){
                const exists = state.favItems.some(item => item.id === newItem.id);
                if (!exists) {
                    state.favItems.push(newItem);
           }}
           if (type === "remove") {
            state.favItems = state.favItems.filter(item => item.id !== newItem.id);

            }
        } }

    }
)
export const { updateFavorite } = FavSlice.actions;
export default FavSlice.reducer;