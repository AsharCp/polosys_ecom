import { createSlice, } from "@reduxjs/toolkit";

interface CartItem{
    id: string,
    title: string,
    thumbnail: string,
    price: number,
    rating: number,
    stock: number,
    quantity: number,
    cartcount: number
}
interface CartState{
    items:CartItem[];
    cartCount: number;
}
const initialState: CartState = {
    items:[],
    cartCount: 0,
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
            newItem.stock=newItem.stock-1;
            state.items.push(action.payload)
            
            }
        },
        updateQuantity:(state,action)=>{
            const { itemId, newQuantity, operation }=action.payload;
            const item = state.items.find(item => item.id === itemId);
            if (item) {
                if(operation==="increase"){
                    item.quantity = newQuantity;
                    item.stock= item.stock-1;
                }
                else{
                   item.quantity = newQuantity;
                   item.stock= item.stock+1;
                }
                
            }
        },
        removeItem:(state,action)=>{
            state.items = state.items.filter((item)=>item.id!==action.payload)

        },
        countUpdate:(state)=>{
             state.cartCount=state.items.length
        },
        }})

export const { addToCart, updateQuantity, removeItem, countUpdate } = CartSlice.actions;
export default CartSlice.reducer