import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = 'https://tasty-treats-backend.p.goit.global/api/';

export const fetchRecipes = createAsyncThunk(
  "recipes/fetchRecipes",
  async (filters, thunkAPI) => { 
    try {
      const response = await axios.get("recipes/", {
        params: filters,
      });
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);