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

export const loginUserAsync = createAsyncThunk(
  "user/loginUser",
  async (data, { rejectWithValue, dispatch }) => {
    try {
      const response = await userRequest.loginUser(data);
      return response.data;
    } catch (err) {
      rejectWithValue(err);
    }
  }
);