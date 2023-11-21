import { FC } from "react";
import { useNotify } from "hooks/useNotify";
import { IDetailedRecipeData } from "interface/DetailedRecipeData";
import { useUpdateFavorites } from "hooks/useUpdateFavorites";
import css from "./AddToFavoritesBtn.module.css";

interface IAddToFavoritesBtnProps {
  recipeData: IDetailedRecipeData;
}

export const AddToFavoritesBtn: FC<IAddToFavoritesBtnProps> = ({recipeData}) => {

  const { notifySuccess } = useNotify();

  const { isFavorite, handleToggleFavorites} = useUpdateFavorites(recipeData);

  return (
    <>
      {!isFavorite ? (
        <button onClick={() => { handleToggleFavorites(recipeData); notifySuccess('The recipe added to favorites') }} type="button" className={`${css.btn}`}>Add to favorites</button>
      ): (
        <button onClick={() => { handleToggleFavorites(recipeData); notifySuccess('The recipe removed from favorites')}} type="button" className={`${css.btn} ${css.removeBtn}`}>Remove from favorites</button>
      )}
    </>  
  )
}