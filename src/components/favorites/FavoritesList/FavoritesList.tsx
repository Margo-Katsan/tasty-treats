import { useSelector, useDispatch } from "react-redux"
import { selectFavoritesPerPage } from "redux/selectors"
import { useWindowSize } from "@uidotdev/usehooks"
import { setPerPage } from "redux/favoritesSlice"
import { RecipeItem } from "components/homeRecipes/rightBlock/recipesSection/RecipeItem/RecipeItem"
import css from "./FavoritesList.module.css"
import { useEffect } from "react"

export const FavoritesList = () => {
  const dispatch = useDispatch();
  const windowWidth = useWindowSize()?.width ?? 0;
useEffect(() => {
    if (windowWidth >= 768) {
      dispatch(setPerPage(12));
    }
    else if (windowWidth < 768) {
      dispatch(setPerPage(9))  
    }
  }, [dispatch, windowWidth]);
  const favoritesPerPage = useSelector(selectFavoritesPerPage)
  return <>
    <ul className={css.list}>
    {(favoritesPerPage).map((favorite) => <RecipeItem recipeData={favorite} favoriteClassName={css.favorite}/>)}
  </ul>
  </>;
}