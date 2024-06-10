import {createSlice} from '@reduxjs/toolkit';
import { createProductAsync, deleteProductAsync, getAllProducts, getAllShopProduct } from './product-api';

const initialState = {
    isLoading:true,
}
const ProductSlice = createSlice({
    name:'products',
    initialState,
    reducers:{
       
       
    },
    
    extraReducers:(builder)=>{
        builder.addCase(createProductAsync.fulfilled, (state, action)=>{
            state.isLoading = false;
            state.product = action.payload;
            state.success = true;
        });
        builder.addCase(getAllProducts.fulfilled, (state, action)=>{
            state.isLoading = false;
            state.allProducts = action.payload;
        })
        builder.addCase(deleteProductAsync.fulfilled, (state, action)=>{
            state.isLoading = false;
        })
        builder.addCase(getAllShopProduct.fulfilled, (state, action)=>{
            state.isLoading = false;
            state.products = action.payload;
        })
    }
})


export const {addToWishList, removeFromWishlist} = ProductSlice.actions;
export default ProductSlice.reducer;