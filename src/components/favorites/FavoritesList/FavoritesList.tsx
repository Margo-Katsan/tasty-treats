import { useSelector, useDispatch } from "react-redux"
// @ts-expect-error TS(2307): Cannot find module 'redux/selectors' or its corres... Remove this comment to see the full error message
import { selectFavoritesPerPage } from "redux/selectors"
import { useWindowSize } from "@uidotdev/usehooks"
// @ts-expect-error TS(2307): Cannot find module 'redux/favoritesSlice' or its c... Remove this comment to see the full error message
import { setPerPage } from "redux/favoritesSlice"
// @ts-expect-error TS(2307): Cannot find module 'components/homeRecipes/rightBl... Remove this comment to see the full error message
import { RecipeItem } from "components/homeRecipes/rightBlock/recipesSection/RecipeItem/RecipeItem"
// @ts-expect-error TS(2307): Cannot find module './FavoritesList.module.css' or... Remove this comment to see the full error message
import css from "./FavoritesList.module.css"
import { useEffect } from "react"
export const FavoritesList = () => {
  const dispatch = useDispatch();
  const windowWidth = useWindowSize().width;
useEffect(() => {

    // @ts-expect-error TS(2531): Object is possibly 'null'.
    if (windowWidth >= 768) {
      dispatch(setPerPage(12));
    }
    // @ts-expect-error TS(2531): Object is possibly 'null'.
    else if (windowWidth < 768) {
      dispatch(setPerPage(9))  
    }
  }, [dispatch, windowWidth]);
  const favoritesPerPage = useSelector(selectFavoritesPerPage)
  // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
  return <>
    {/* @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
    <ul className={css.list}>
    {/* @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
    {(favoritesPerPage as any).map((favorite: any) => <RecipeItem recipeData={favorite} favoriteClassName={css.favorite}/>)}
  </ul>
  </>;
}