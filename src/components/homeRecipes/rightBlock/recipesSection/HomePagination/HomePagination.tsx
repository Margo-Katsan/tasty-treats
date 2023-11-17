import { useSelector } from "react-redux";
// @ts-expect-error TS(2307): Cannot find module 'hooks/useExistingSearchParams'... Remove this comment to see the full error message
import { useExistingSearchParams } from 'hooks/useExistingSearchParams';
// @ts-expect-error TS(2307): Cannot find module 'redux/selectors' or its corres... Remove this comment to see the full error message
import { selectTotalRecipes } from "redux/selectors";
// @ts-expect-error TS(2307): Cannot find module 'components/sharedPagination/Pa... Remove this comment to see the full error message
import { Pagination } from 'components/sharedPagination/Pagination/Pagination';

export const HomePagination = () => {
  const totalRecipes = useSelector(selectTotalRecipes);
  const { updatingSearchParams } = useExistingSearchParams();

  const onPageClick = (selectedPage: any) => {
    updatingSearchParams('page', selectedPage + 1)
  }

  return (
    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <Pagination
      totalRecipes={totalRecipes}
      onPageClick={onPageClick}
    />
  )
}