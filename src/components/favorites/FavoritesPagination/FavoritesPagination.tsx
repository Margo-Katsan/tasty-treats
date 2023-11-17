import { useSelector, useDispatch } from "react-redux";
// @ts-expect-error TS(2307): Cannot find module 'redux/favoritesSlice' or its c... Remove this comment to see the full error message
import { setItemOffset } from 'redux/favoritesSlice';
// @ts-expect-error TS(2307): Cannot find module 'redux/selectors' or its corres... Remove this comment to see the full error message
import { selectFavorites, selectTotalFavorites, selectPerPage, selectFavoritesCategory } from "redux/selectors";
// @ts-expect-error TS(2307): Cannot find module 'components/sharedPagination/Pa... Remove this comment to see the full error message
import { Pagination } from 'components/sharedPagination/Pagination/Pagination'
import { useEffect, useState } from "react";

export const FavoritesPagination = () => {
  const dispatch = useDispatch();
  const totalRecipes = useSelector(selectTotalFavorites);
  const perPage = useSelector(selectPerPage);
  const favorites = useSelector(selectFavorites);
  const category = useSelector(selectFavoritesCategory);
  const [pageCount, setpageCount] = useState(Math.ceil((favorites as any).length / (perPage as any)));
  const onPageClick = (selectedPage: any) => {
    const newOffset = totalRecipes !== 0 ? (selectedPage * (perPage as any)) % (totalRecipes as any) : 0;
    
    dispatch(setItemOffset(newOffset));
  };
  useEffect(() => {
    if (category !== '') {
        setpageCount(Math.ceil((totalRecipes as any) / (perPage as any)));
    }
    else {
        setpageCount(Math.ceil((favorites as any).length / (perPage as any)));
    }
}, [category, totalRecipes, perPage, (favorites as any).length]);

  return (
    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <Pagination
      totalRecipes={pageCount}
      onPageClick={onPageClick}
    />
  )
}