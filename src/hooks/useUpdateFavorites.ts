import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { selectFavorites } from "redux/selectors";
import { toggleFavorites } from "redux/favoritesSlice";
import { IDetailedRecipeData } from "interface/DetailedRecipeData";
import { useState, useEffect } from "react";

export const useUpdateFavorites = (recipeData: IDetailedRecipeData) => {
  const dispatch = useDispatch();

  const favorites = useSelector(selectFavorites);
  
  const [isFavorite, setIsFavorite] = useState<boolean>(favorites.filter(favorite => favorite._id === recipeData._id).length !== 0);

  useEffect(() => {
    setIsFavorite(favorites.filter(favorite => favorite._id === recipeData._id).length !== 0)
  }, [favorites, recipeData._id])  

  const handleToggleFavorites = (recipeData: IDetailedRecipeData) => {
    dispatch(toggleFavorites(recipeData));
    setIsFavorite(isFavorite);
  }

  return { isFavorite, handleToggleFavorites };
}