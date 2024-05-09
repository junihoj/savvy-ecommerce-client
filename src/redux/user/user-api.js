import { createAsyncThunk } from "@reduxjs/toolkit";
import userRequest from "./user-request";

export const getUserAsync = createAsyncThunk(
    "user/getUser",
    async (_, { rejectWithValue, dispatch }) => {
      try {
        const response = await userRequest.getUser();
        return response.data;
      } catch (err) {
        rejectWithValue(err);
      }
    }
);