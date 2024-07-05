import { createAsyncThunk } from "@reduxjs/toolkit";
import eventRequest from "./event-request";

export const createEventAsync = createAsyncThunk(
    "event/createEvent",
    async (data, { rejectWithValue,  }) => {
      try {
        const response = await eventRequest.createEvent(data);
        return response.data;
      } catch (err) {
        rejectWithValue(err);
      }
    }
);


//delete event of a shop
export const deleteEventAsync = createAsyncThunk(
    "event/deleteEvent",
    async (data, { rejectWithValue,  }) => {
      try {
        const response = await eventRequest.createEvent(data);
        return response.data;
      } catch (err) {
        rejectWithValue(err);
      }
    }
);

//get all events
export const getAllEvents = createAsyncThunk(
    "event/getAllEvents",
    async ( _, { rejectWithValue,  }) => {
      try {
        const response = await eventRequest.getAllEvents();
        return response.data;
      } catch (err) {
        rejectWithValue(err);
      }
    }
)

// get All Event of a shop
export const getAllShopEvent = createAsyncThunk(
    "event/getAllShopEvent",
    async ( id, { rejectWithValue,  }) => {
      try {
        const response = await eventRequest.getAllEvents();
        return response.data;
      } catch (err) {
        rejectWithValue(err);
      }
    } 
)
