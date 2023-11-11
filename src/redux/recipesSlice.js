import { createSlice } from "@reduxjs/toolkit";
import { fetchRecipes } from "./operations";

const recipesSlice = createSlice({
  name: "recipes",
  initialState: {
    totalRecipes: 0,
    items: [],
    isLoading: false,
    error: null,
  },
  extraReducers: {
    [fetchRecipes.pending](state) {
      state.isLoading = true;
    },
    [fetchRecipes.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.totalRecipes = action.payload.totalPages;
      state.items = action.payload.results;
    },
    [fetchRecipes.rejected](state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});



export const recipesReducer = recipesSlice.reducer;