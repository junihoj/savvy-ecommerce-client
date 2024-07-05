import {createSlice} from '@reduxjs/toolkit';
import { createEventAsync, deleteEventAsync, getAllEvents, getAllShopEvent } from './event-api';
// import { eventData } from '../../static/data';

const initialState = {
    isLoading:false,
    allEvents:[]
}
const EventSlice = createSlice({
    name:'events',
    initialState,
    reducers:{
       
       
    },
    
    extraReducers:(builder)=>{
        builder.addCase(createEventAsync.fulfilled, (state, action)=>{
            state.isLoading = false;
            state.event = action.payload;
            state.success = true;
        });
        builder.addCase(getAllEvents.fulfilled, (state, action)=>{
            state.isLoading = false;
            state.allEvents = action.payload;
        })
        builder.addCase(deleteEventAsync.fulfilled, (state, action)=>{
            state.isLoading = false;
        })
        builder.addCase(getAllShopEvent.fulfilled, (state, action)=>{
            state.isLoading = false;
            state.events = action.payload;
        })
    }
})


export const {addToWishList, removeFromWishlist} = EventSlice.actions;
export default EventSlice.reducer;