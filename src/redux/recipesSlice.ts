import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { fetchRecipes } from "./operations";
import { IRecipes } from "interface/Recipes"
import {IDetailedRecipeData} from "interface/DetailedRecipeData"

interface RecipesState {
  totalRecipes: number;
  totalRecipesPages: number
  items: IDetailedRecipeData[];
  isLoading: boolean;
  error: string | null;
}

const initialState: RecipesState = {
  totalRecipes: 0,
  totalRecipesPages: 0,
  items: [],
  isLoading: false,
  error: null,
};

const handlePending = (state: RecipesState) => {
  state.isLoading = true;
};

const handleRejected = (state: RecipesState, action: any) => {
  state.isLoading = false;
  state.error = action.payload;
};

const handleFetchRecipesFulfilled = (state: RecipesState, action: PayloadAction<IRecipes>) => {
  state.isLoading = false;
  state.error = null;
  state.totalRecipesPages = action.payload.totalPages;
  state.totalRecipes = action.payload.totalPages * action.payload.results.length;
  state.items = action.payload.results;
  
}


const recipesSlice = createSlice({
  name: "recipes",
  initialState,
  reducers: {},
  extraReducers: builder =>
    builder
      .addCase(fetchRecipes.pending, handlePending)
      .addCase(fetchRecipes.fulfilled, handleFetchRecipesFulfilled)
      .addCase(fetchRecipes.rejected, handleRejected)
})


export const recipesReducer = recipesSlice.reducer;