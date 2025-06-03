import { configureStore } from "@reduxjs/toolkit";
import productReducer from '../Reducer/ProductSlice'
import cartReducer from '../Reducer/CartSlice'

export const store = configureStore({
    reducer:{
        products:productReducer,
        cart:cartReducer,
    }
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;