import { createSlice, } from "@reduxjs/toolkit";
const savedCart = localStorage.getItem('cartAdd')
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
    // items:[],
    items: savedCart ? JSON.parse(savedCart) : [],
    cartCount: 0,
}

const CartSlice = createSlice({
    name:"cart",
    initialState,
    reducers:{
        addToCart:(state,action)=>{
            console.log(action,'stets');
            
            const newItem = action.payload
            // console.log(newItem,"Check");
            if(state.items.find(item=>item.id===newItem.id))
            {
              alert("Item already exist!")
            }
            else{
            console.log(newItem.stock,"ASHAR1")
            newItem.stock=newItem.stock-newItem.quantity;
            console.log(newItem.stock,"ASHAR2")
            state.items.push(newItem)
            console.log(newItem.stock,"ASHAR3")
            
            
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