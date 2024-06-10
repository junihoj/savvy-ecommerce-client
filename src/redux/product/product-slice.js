import {createSlice} from '@reduxjs/toolkit';
import { createProductAsync } from './product-api';

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
        })
    }
})


export const {addToWishList, removeFromWishlist} = ProductSlice.actions;
export default ProductSlice.reducer;