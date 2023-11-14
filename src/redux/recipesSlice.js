import { createSlice } from "@reduxjs/toolkit";
import { fetchRecipes } from "./operations";

const handlePending = state => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const handleFetchRecipesFulfilled = (state, action) => {
  state.isLoading = false;
  state.error = null;
  state.totalRecipes = action.payload.totalPages;
  state.items = action.payload.results;
}

const recipesSlice = createSlice({
  name: "recipes",
  initialState: {
    totalRecipes: 0,
    items: [],
    isLoading: false,
    error: null,
  },
  extraReducers: builder =>
    builder
      .addCase(fetchRecipes.pending, handlePending)
      .addCase(fetchRecipes.fulfilled, handleFetchRecipesFulfilled)
      .addCase(fetchRecipes.rejected, handleRejected)
})


export const recipesReducer = recipesSlice.reducer;