import { createSlice } from "@reduxjs/toolkit";
import { fetchRecipes } from "./operations";

const handlePending = (state: any) => {
  state.isLoading = true;
};

const handleRejected = (state: any, action: any) => {
  state.isLoading = false;
  state.error = action.payload;
};

const handleFetchRecipesFulfilled = (state: any, action: any) => {
  state.isLoading = false;
  state.error = null;
  state.totalRecipes = action.payload.totalPages;
  state.items = action.payload.results;
}

// @ts-expect-error TS(2345): Argument of type '{ name: "recipes"; initialState:... Remove this comment to see the full error message
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