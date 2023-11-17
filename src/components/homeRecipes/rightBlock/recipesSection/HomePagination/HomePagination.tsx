import { useSelector } from "react-redux";
import { useExistingSearchParams } from 'hooks/useExistingSearchParams';
import { selectTotalRecipes } from "redux/selectors";
import { Pagination } from 'components/sharedPagination/Pagination/Pagination';

export const HomePagination = () => {
  const totalRecipes = useSelector(selectTotalRecipes);
  const { updatingSearchParams } = useExistingSearchParams();

  const onPageClick = selectedPage => {
    updatingSearchParams('page', selectedPage + 1)
  }

  return (
    <Pagination
      totalRecipes={totalRecipes}
      onPageClick={onPageClick}
    />
  )
}