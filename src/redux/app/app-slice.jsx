import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    componentIsLoading:false
}
const appSlice = createSlice({
    name:'app',
    initialState,
    reducers:{
        setComponentIsLoading(state, action){
            state.componentIsLoading = action.payload;
        }
    }
});

export const {setComponentIsLoading} = appSlice.actions;

const   appReducer = appSlice.reducer;
export default appReducer;