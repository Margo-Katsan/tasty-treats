import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import {IDetailedRecipeData} from "interface/DetailedRecipeData"

interface IFavoritesState {
  items: IDetailedRecipeData[];
  category: string;
  totalFavorites: number;
  perPage: number,
  itemOffset: number,
  isLoading: boolean;
}

const initialState: IFavoritesState = {
  items: [],
  category: '',
  totalFavorites: 0,
  perPage: window.innerWidth < 768 ? 9 : 12,
  itemOffset: 0,
  isLoading: false,
};

const favoritesSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    toggleFavorites(state: IFavoritesState, action: PayloadAction<IDetailedRecipeData>) {
      const isFavoriteExist = state.items.filter(favorite => favorite._id === action.payload._id).length !== 0;
      if (isFavoriteExist) {
        state.items = state.items.filter(favorite => action.payload._id !== favorite._id);
      }
      else {
        state.items.push(action.payload);
      }
      state.totalFavorites = state.items.length;
    },
    setItemOffset(state: IFavoritesState, action: PayloadAction<number>) {
      state.itemOffset = action.payload
    },
    setFavoritesCategory(state: IFavoritesState, action: PayloadAction<string>) {
      state.category = action.payload;
      state.itemOffset = 0;
      
      if (action.payload !== '') {
        state.totalFavorites = state.items.filter(favorite => action.payload === (favorite).category).length;
      }
      else {
        state.totalFavorites = state.items.length;
      }

        


    },
    setPerPage(state: IFavoritesState, action) {
      state.perPage = action.payload
    }
  },
});

const persistConfig = {
  key: 'favorites',
  storage,
}


export const { toggleFavorites, setItemOffset, setFavoritesCategory, setPerPage } = favoritesSlice.actions;
export const favoritesReducer = persistReducer(persistConfig, favoritesSlice.reducer);