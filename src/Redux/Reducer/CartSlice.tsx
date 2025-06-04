import { createSlice, } from "@reduxjs/toolkit";

interface CartItem{
    id: string,
    title: string,
    thumbnail: string,
    price: number,
    rating: number,
    stock: number,
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
            newItem.stock=newItem.stock-1;
            state.items.push(action.payload)
            
            }
        },
        updateQuantity:(state,acttion)=>{
            const { itemId, newQuantity, operation }=acttion.payload;
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
        }})

export const { addToCart, updateQuantity, removeItem } = CartSlice.actions;
export default CartSlice.reducer