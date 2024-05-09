import {createSlice} from '@reduxjs/toolkit';
import { getUserAsync } from './user-api';


const initialState = {
    isAuthenticated:false,
    loading:false,
    user: null,
}
const userSlice = createSlice({
    name:'user',
    initialState,
    reducers:{
        loadUserRequest(state){
            state.loading = true;
        },
        loadUserSuccess(state,action){
            state.isAuthenticated = true;
            state.loading = false;
            state.user = action.payload;
        },
        loadUserFail(state, action){
            state.loading = false;
            state.error = action.payload;
            state.isAuthenticated = false;
        },
        clearErrors(state){
            state.error =null;
        }
    },
    extraReducers:(builder)=>{
        builder.addCase(getUserAsync.rejected, (state)=>{
            state.isAuthenticated = false;
        })
        builder.addCase(getUserAsync.fulfilled, (state, action)=>{
            state.isAuthenticated = true;
            if(action?.payload?.data?.user){
                state.user = action.payload.data.user
            }
        })
    }
    // {
    //     [getUserAsync.rejected](state){
    //         state.isAuthenticated =false
    //     }
    // }
})


export const {loadUserFail} = userSlice.actions;
export default userSlice.reducer;