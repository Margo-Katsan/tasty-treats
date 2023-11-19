import { useSelector, useDispatch } from "react-redux";
import { setItemOffset } from 'redux/favoritesSlice';
import { selectFavorites, selectTotalFavorites, selectPerPage } from "redux/selectors";
import { Pagination } from 'components/sharedPagination/Pagination/Pagination'


export const FavoritesPagination = () => {
  const dispatch = useDispatch();

  const totalRecipes = useSelector(selectTotalFavorites);
  const perPage = useSelector(selectPerPage);
  const favorites = useSelector(selectFavorites);

  const pageCount = Math.ceil((favorites).length / (perPage));

  const onPageClick = (selectedPage: number) => {
    const newOffset = totalRecipes !== 0 ? (selectedPage * (perPage)) % (totalRecipes) : 0;
    dispatch(setItemOffset(newOffset));
  };


  return (
    <Pagination
      totalPages={pageCount}
      onPageClick={onPageClick}
    />
  )
}