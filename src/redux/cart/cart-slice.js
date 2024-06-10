import {createSlice} from '@reduxjs/toolkit';

const initialState = localStorage.getItem("cartItems")
? JSON.parse(localStorage.getItem("cartItems"))
: [];
const cartSlice = createSlice({
    name:'wishlist',
    initialState,
    reducers:{
       addToCart(state, action){
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
       removeFromCart(state, action){
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


export const {addToCart, removeFromCart} = cartSlice.actions;
export default cartSlice.reducer;