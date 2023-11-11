import { createSlice } from "@reduxjs/toolkit";
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web

const favoritesSlice = createSlice({
  name: "favorites",
  initialState: {
    items: [],
    category: '',
    totalFavorites: 0,
    perPage: 9,
    itemOffset: 0,
    isLoading: false,
    error: null,
  },
  reducers: {
    toogleFavorites(state, action) {
      const isFavoriteExist = state.items.filter(favorite => favorite._id === action.payload._id).length !== 0;
      if (isFavoriteExist) {
        state.items = state.items.filter(favorite => action.payload._id !== favorite._id);
        state.totalFavorites = state.totalFavorites - 1;
        return;
      }
      state.items.push(action.payload);
      state.totalFavorites = state.totalFavorites + 1;
    },
    setItemOffset(state, action) {
      state.itemOffset = action.payload
    },
    setFavoritesCategory(state, action) {
      state.category = action.payload
    }
  },
});

const persistConfig = {
  key: 'favorites',
  storage,
}

export const { toogleFavorites, setItemOffset, setFavoritesCategory } = favoritesSlice.actions;
export const favoritesReducer = persistReducer(persistConfig, favoritesSlice.reducer);