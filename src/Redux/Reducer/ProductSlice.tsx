import { createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import axios from 'axios'

interface Product {
    id: number,
    title: string;
    description: string,
    price: number,
    thumbnail: string,
    discountPercentage: number,
    rating: number,
    stock: number,
    brand: string,
    category: string,
}
// slice state type
interface ProductState {
    items: Product[],
    loading: boolean,
}
const initialState: ProductState = {
    items: [],
    loading : false,
}

export const fetchProducts = createAsyncThunk('product/fetch',async()=>{
    const response = await axios.get("https://dummyjson.com/products")
    return response.data.products;
});

const PrdoductSlice = createSlice({
    name: "products",
    initialState,
    reducers:{
    },
    extraReducers:(builder)=>{
        builder
        .addCase(fetchProducts.pending,(state)=>{
            state.loading=true;
        })
        .addCase(fetchProducts.fulfilled,(state,action)=>{
            state.loading=false;
            state.items=action.payload;
        })
    }
})

export default PrdoductSlice.reducer;