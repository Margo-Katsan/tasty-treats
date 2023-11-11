import axios from 'axios';
axios.defaults.baseURL = 'https://tasty-treats-backend.p.goit.global/api/';

export const fetchPopularRecipes = async () => {
  const response = await axios.get("recipes/popular/");
  return response.data;
}

export const fetchRecipeById = async recipeId => {
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

export const addOrder = async data => {
  try {
    
      const resp = await axios.post("orders/add", data);
      if (resp.status !== 201) {
        throw new Error();
      }
      console.log('Your order is accepted', 'Everything is fine');
    } catch (error) {
      console.log('Something went wrong. Try later...', 'Sorry');
    }
  }

export const patchRate = async (recipeId, data) => {
  try {
    const resp = await axios.patch(`recipes/${recipeId}/rating`, data);
    console.log(resp);
    if (resp.status !== 200) {
      throw new Error();
    }
    console.log('Rating updated', 'Thanks');
    } catch (error) {
      if (error.request.status !== 409) {
        console.log('Something went wrong. Try later...', 'Sorry')

      }
      console.log('This letter already exists.', 'Sorry');

    }
}
