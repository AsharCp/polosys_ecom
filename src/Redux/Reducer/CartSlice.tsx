import { createSlice, } from "@reduxjs/toolkit";

interface CartItem{
    id: string,
    title: string,
    thumbnail: string,
    price: number,
    rating: number,
    quantity: number,
}
interface CartState{
    items:CartItem[];
}
const initialState: CartState = {
    items:[]
}

const CartSlice = createSlice({
    name:"cart",
    initialState,
    reducers:{
        addToCart:(state,action)=>{
            const newItem = action.payload
            if(state.items.find(item=>item.id===newItem.id))
            {
              alert("Item already exist!")
            }
            else{
            state.items.push(action.payload)
            }
        },
        }})

export const { addToCart} = CartSlice.actions;
export default CartSlice.reducer