import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { ThunkDispatch } from "redux-thunk";
import { AnyAction } from "@reduxjs/toolkit";
import { configureStore } from "@reduxjs/toolkit";
import { persistStore } from "redux-persist";
import thunk from "redux-thunk"; 
import { recipesReducer } from "./recipesSlice";
import { favoritesReducer } from "./favoritesSlice";

export const store = configureStore({
  reducer: {
    recipes: recipesReducer,
    favorites: favoritesReducer,
  },
  middleware: [thunk], 
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;






export type AppThunkDispatch = ThunkDispatch<RootState, any, AnyAction>;



export const useAppDispatch = () => useDispatch<AppThunkDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;