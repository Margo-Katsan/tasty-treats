import { IEvent } from 'interface/Event';
import { ICategory } from 'interface/Category';
import { IIngredient } from "interface/Ingredient";
import { IArea } from 'interface/Area';
import { IPopularRecipe } from 'interface/PopularRecipe';
import { IDetailedRecipeData } from 'interface/DetailedRecipeData';
import { IOrder } from 'interface/Order';
import { IRating } from 'interface/Rating';

import axios from 'axios';
axios.defaults.baseURL = 'https://tasty-treats-backend.p.goit.global/api/';

export const fetchPopularRecipes = async (): Promise<IPopularRecipe[]> => {
  const response = await axios.get("recipes/popular/");
  return response.data;
}

export const fetchRecipeById = async (recipeId: string): Promise<IDetailedRecipeData> => {
  const response = await axios.get(`recipes/${recipeId}`);
  return response.data;
}

export const fetchAreas = async (): Promise<IArea[]> => {
  const response = await axios.get("areas/");
  return response.data;
}

export const fetchCategories = async (): Promise<ICategory[]> => {
  const response = await axios.get("categories/");
  return response.data;
}

export const fetchEvents = async (): Promise<IEvent[]> => {
  const response = await axios.get("events/");
  return response.data;
}

export const fetchIngredients = async (): Promise<IIngredient[]> => {
  const response = await axios.get("ingredients/");
  return response.data;
}

export const addOrder = async (data: IOrder) => {
  const resp = await axios.post("orders/add", data);
  return resp.status;
}

export const patchRating = async (recipeId: string, data: IRating) => {
  const resp = await axios.patch(`recipes/${recipeId}/rating`, data);
  return resp.status;
}
