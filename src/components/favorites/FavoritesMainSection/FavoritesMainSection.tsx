import { useSelector } from "react-redux"
import { FavoritesFilter } from "../FavoritesFilter/FavoritesFilter"
import { NoFavoritesYet } from "../NoFavoritesYet/NoFavoritesYet"
import { FavoritesList } from "../FavoritesList/FavoritesList"
import { FavoritesPagination } from "../FavoritesPagination/FavoritesPagination"
import { selectShowPagination, selectFavorites } from "redux/selectors";
import css from "./FavoritesMainSection.module.css";

export const FavoritesMainSection = () => {
  const showPagination = useSelector(selectShowPagination);
  const favorites = useSelector(selectFavorites);

  return (<section className={css.section}>
      {(favorites).length === 0 ? (<NoFavoritesYet />) : (<FavoritesFilter />)}
      
      <FavoritesList />
      {showPagination && (<FavoritesPagination />)}
      
    </section>);
}