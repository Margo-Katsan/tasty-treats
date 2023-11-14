import { useSelector, useDispatch } from "react-redux";
import { setItemOffset } from 'redux/favoritesSlice';
import { selectFavorites, selectTotalFavorites, selectPerPage, selectFavoritesCategory } from "redux/selectors";
import { Pagination } from 'components/sharedPagination/Pagination/Pagination'
import { useEffect, useState } from "react";

export const FavoritesPagination = () => {
  const dispatch = useDispatch();
  const totalRecipes = useSelector(selectTotalFavorites);
  const perPage = useSelector(selectPerPage);
  const favorites = useSelector(selectFavorites);
  const category = useSelector(selectFavoritesCategory);
  const [pageCount, setpageCount] = useState(Math.ceil(favorites.length / perPage));
  const onPageClick = selectedPage => {
    const newOffset = totalRecipes !== 0 ? (selectedPage * perPage) % totalRecipes : 0;
    
    dispatch(setItemOffset(newOffset));
  };
  useEffect(() => {
    if (category !== '') {
      setpageCount(Math.ceil(totalRecipes / perPage));
    }
    else {
      setpageCount(Math.ceil(favorites.length / perPage))
    }
  }, [category, totalRecipes, perPage, favorites.length])

  return (
    <Pagination
      totalRecipes={pageCount}
      onPageClick={onPageClick}
    />
  )
}