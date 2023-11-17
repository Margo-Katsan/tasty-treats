import { useNotify } from "hooks/useNotify";
import css from "./AddToFavoritesBtn.module.css";

export const AddToFavoritesBtn = ({onToggleFavorites, recipeData, isFavorite}) => {

  const { notifySuccess } = useNotify();

  const handleToggleFavorites = () => {
    onToggleFavorites(recipeData);
  }

  return (
    <>
      {!isFavorite ? (
        <button onClick={() => { handleToggleFavorites(recipeData); notifySuccess('The recipe added to favorites') }} type="button" className={`${css.btn}`}>Add to favorite</button>
      ): (
        <button onClick={() => { handleToggleFavorites(recipeData); notifySuccess('The recipe removed from favorites')}} type="button" className={`${css.btn} ${css.removeBtn}`}>Remove from favorites</button>
      )}
      
 
    </>
    
  )
}