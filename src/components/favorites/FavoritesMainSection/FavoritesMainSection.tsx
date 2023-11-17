import { useSelector } from "react-redux"
// @ts-expect-error TS(6142): Module '../FavoritesFilter/FavoritesFilter' was re... Remove this comment to see the full error message
import { FavoritesFilter } from "../FavoritesFilter/FavoritesFilter"
// @ts-expect-error TS(6142): Module '../NoFavoritesYet/NoFavoritesYet' was reso... Remove this comment to see the full error message
import { NoFavoritesYet } from "../NoFavoritesYet/NoFavoritesYet"
// @ts-expect-error TS(6142): Module '../FavoritesList/FavoritesList' was resolv... Remove this comment to see the full error message
import { FavoritesList } from "../FavoritesList/FavoritesList"
// @ts-expect-error TS(6142): Module '../FavoritesPagination/FavoritesPagination... Remove this comment to see the full error message
import { FavoritesPagination } from "../FavoritesPagination/FavoritesPagination"
// @ts-expect-error TS(2307): Cannot find module 'redux/selectors' or its corres... Remove this comment to see the full error message
import { selectShowPagination, selectFavorites } from "redux/selectors";
// @ts-expect-error TS(2307): Cannot find module './FavoritesMainSection.module.... Remove this comment to see the full error message
import css from "./FavoritesMainSection.module.css";

export const FavoritesMainSection = () => {
  const showPagination = useSelector(selectShowPagination);
  const favorites = useSelector(selectFavorites);

  // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
  return (<section className={css.section}>
      {/* @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
      {(favorites as any).length === 0 ? (<NoFavoritesYet />) : (<FavoritesFilter />)}
      
      {/* @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
      <FavoritesList />
      {/* @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
      {showPagination && (<FavoritesPagination />)}
      
    </section>);
}