import { createSlice } from "@reduxjs/toolkit";
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const favoritesSlice = createSlice({
  name: "favorites",
  initialState: {
    items: [],
    category: '',
    totalFavorites: 0,
    perPage: window.innerWidth < 768 ? 9 : 12,
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
      if (action.payload !== '') {
        state.totalFavorites = state.items.filter(favorite => action.payload === favorite.category).length;
      }
      else {
        state.totalFavorites = state.items.length;
      }
    },
    setPerPage(state, action) {
      state.perPage = action.payload
    }
  },
});

const persistConfig = {
  key: 'favorites',
  storage,
}

export const { toogleFavorites, setItemOffset, setFavoritesCategory, setPerPage, setTotalfavorites } = favoritesSlice.actions;
export const favoritesReducer = persistReducer(persistConfig, favoritesSlice.reducer);