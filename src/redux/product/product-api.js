import { createAsyncThunk } from "@reduxjs/toolkit";
import productRequest from "./product-request";

export const createProductAsync = createAsyncThunk(
    "product/createProduct",
    async (data, { rejectWithValue,  }) => {
      try {
        const response = await productRequest.createProduct(data);
        return response.data;
      } catch (err) {
        rejectWithValue(err);
      }
    }
);


//delete product of a shop
export const deleteProductAsync = createAsyncThunk(
    "product/deleteProduct",
    async (data, { rejectWithValue,  }) => {
      try {
        const response = await productRequest.createProduct(data);
        return response.data;
      } catch (err) {
        rejectWithValue(err);
      }
    }
);

//get all products
export const getAllProducts = createAsyncThunk(
    "product/getAllProducts",
    async ( _, { rejectWithValue,  }) => {
      try {
        const response = await productRequest.getAllProducts();
        return response.data;
      } catch (err) {
        rejectWithValue(err);
      }
    }
)

// get All Product of a shop
export const getAllShopProduct = createAsyncThunk(
    "product/getAllShopProduct",
    async ( id, { rejectWithValue,  }) => {
      try {
        const response = await productRequest.getAllProducts();
        return response.data;
      } catch (err) {
        rejectWithValue(err);
      }
    } 
)
