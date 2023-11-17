import axios from 'axios';
axios.defaults.baseURL = 'https://tasty-treats-backend.p.goit.global/api/';

export const fetchPopularRecipes = async () => {
  const response = await axios.get("recipes/popular/");
  return response.data;
}

export const fetchRecipeById = async (recipeId: any) => {
  const response = await axios.get(`recipes/${recipeId}`);
  return response.data;
}

export const fetchAreas = async () => {
  const response = await axios.get("areas/");
  return response.data;
}

export const fetchCategories = async () => {
  const response = await axios.get("categories/");
  return response.data;
}

export const fetchEvents = async () => {
  const response = await axios.get("events/");
  return response.data;
}

export const fetchIngredients = async () => {
  const response = await axios.get("ingredients/");
  return response.data;
}

export const addOrder = async (data: any) => {
  try {
    
      const resp = await axios.post("orders/add", data);
      if (resp.status !== 201) {
        throw new Error();
      }
      return resp.status;
    } catch (error) {
      throw error;
    }
  }

export const patchRating = async (recipeId: any, data: any) => {
  try {
    const resp = await axios.patch(`recipes/${recipeId}/rating`, data);
    if (resp.status !== 200) {
      throw new Error();
    }
    return resp.status;
    } catch (error) {
    throw error;

    }
}
