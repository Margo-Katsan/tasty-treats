// @ts-expect-error TS(2307): Cannot find module 'hooks/useNotify' or its corres... Remove this comment to see the full error message
import { useNotify } from "hooks/useNotify";
// @ts-expect-error TS(2307): Cannot find module './AddToFavoritesBtn.module.css... Remove this comment to see the full error message
import css from "./AddToFavoritesBtn.module.css";

export const AddToFavoritesBtn = ({
  onToggleFavorites,
  recipeData,
  isFavorite
}: any) => {

  const { notifySuccess } = useNotify();

  const handleToggleFavorites = () => {
    onToggleFavorites(recipeData);
  }

  return (
    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <>
      {!isFavorite ? (
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <button onClick={() => { handleToggleFavorites(recipeData); notifySuccess('The recipe added to favorites') }} type="button" className={`${css.btn}`}>Add to favorite</button>
      ): (
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <button onClick={() => { handleToggleFavorites(recipeData); notifySuccess('The recipe removed from favorites')}} type="button" className={`${css.btn} ${css.removeBtn}`}>Remove from favorites</button>
      )}
      
 
    </>
    
  )
}