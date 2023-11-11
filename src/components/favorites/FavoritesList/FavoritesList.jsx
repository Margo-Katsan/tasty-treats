import { useSelector } from "react-redux"
import { selectFavoritesPerPage } from "redux/selectors"
import { RecipeItem } from "components/homeRecipes/rightBlock/recipesSection/RecipeItem/RecipeItem"
import css from "./FavoritesList.module.css"
export const FavoritesList = () => {
  const favoritesPerPage = useSelector(selectFavoritesPerPage)
  return (
    <ul className={css.list}>
      {favoritesPerPage.map(favorite => <RecipeItem recipeData={favorite} favoriteClassName={css.favorite} />)}
    </ul>
  )
}