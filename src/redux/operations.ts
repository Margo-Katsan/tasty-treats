import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import {IRecipes} from "interface/Recipes"

axios.defaults.baseURL = 'https://tasty-treats-backend.p.goit.global/api/';

export interface IFetchRecipes {
  page: string;
  title: string;
  category: string;
  area: string;
  ingredient: string;
  time: string;
  limit: string
}

export const fetchRecipes = createAsyncThunk(
  "recipes/fetchRecipes",
  async (filters: IFetchRecipes, thunkAPI): Promise<IRecipes> => { 
    try {
      const response = await axios.get("recipes/", {
        params: filters,
      });
      return response.data as IRecipes;
    } catch (e) {
      throw new Error((e as any).message);
    }
  }
);