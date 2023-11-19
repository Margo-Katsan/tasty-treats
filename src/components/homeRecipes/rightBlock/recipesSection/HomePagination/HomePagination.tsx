import { useSelector } from "react-redux";
import { useExistingSearchParams } from 'hooks/useExistingSearchParams';
import { selectTotalRecipesPages } from "redux/selectors";
import { Pagination } from 'components/sharedPagination/Pagination/Pagination';

export const HomePagination = () => {
  const totalRecipesPages = useSelector(selectTotalRecipesPages);
  const { updatingSearchParams } = useExistingSearchParams();

  const onPageClick = (selectedPage: number) => {
    updatingSearchParams('page', `${selectedPage + 1}`)
  }

  return (
    <Pagination
      totalPages={totalRecipesPages}
      onPageClick={onPageClick}
    />
  )
}