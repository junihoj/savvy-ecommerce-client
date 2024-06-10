import {createSlice} from '@reduxjs/toolkit';

const initialState = localStorage.getItem("wishlistItems")
? JSON.parse(localStorage.getItem("wishlistItems"))
: [];
const wishListSlice = createSlice({
    name:'wishlist',
    initialState,
    reducers:{
       addToWishList(state, action){
            const item = action.payload;
            const isItemExist = state.find((i) => i._id === item._id);
            let cloneState = [...state]
            if(isItemExist){
                cloneState.map((i)=>i._id === isItemExist._id ? item : i)
            }else{
                cloneState = [...cloneState, item]
            }
            state = cloneState;
       },
       removeFromWishlist(state, action){
        let cloneState = [...state]
        state = cloneState.filter((i)=>i._id !== action.payload)
   }
    },
    
    // {
    //     [getUserAsync.rejected](state){
    //         state.isAuthenticated =false
    //     }
    // }
})


export const {addToWishList, removeFromWishlist} = wishListSlice.actions;
export default wishListSlice.reducer;