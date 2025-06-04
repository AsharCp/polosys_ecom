import { configureStore } from "@reduxjs/toolkit";
import productReducer from '../Reducer/ProductSlice'
import cartReducer from '../Reducer/CartSlice'
import searchReducer from '../Reducer/SearchSlice'
import selectedProducts  from "../Reducer/FilterSlice";

export const store = configureStore({
    reducer:{
        products:productReducer,
        cart:cartReducer,
        search:searchReducer,
        selected:selectedProducts
    }
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;