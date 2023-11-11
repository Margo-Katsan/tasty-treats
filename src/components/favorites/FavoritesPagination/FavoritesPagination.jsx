import { useSelector, useDispatch } from "react-redux";
import { setItemOffset } from 'redux/favoritesSlice';
import { selectFavorites, selectTotalFavorites, selectPerPage } from "redux/selectors";
import { Pagination } from 'components/sharedPagination/Pagination/Pagination'

export const FavoritesPagination = () => {
  const dispatch = useDispatch();
  const totalRecipes = useSelector(selectTotalFavorites);
  const perPage = useSelector(selectPerPage);
  const favorites = useSelector(selectFavorites)
  
  const onPageClick = selectedPage => {
    const newOffset = (selectedPage * perPage) % totalRecipes;
    dispatch(setItemOffset(newOffset));
  };
  const pageCount = Math.ceil(favorites.length / perPage);
  return (
    <Pagination
      totalRecipes={pageCount}
      onPageClick={onPageClick}
    />
  )
}