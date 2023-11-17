import { useEffect, useMemo} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
// @ts-expect-error TS(2307): Cannot find module 'redux/selectors' or its corres... Remove this comment to see the full error message
import { selectRecipes } from 'redux/selectors';
// @ts-expect-error TS(2307): Cannot find module 'redux/operations' or its corre... Remove this comment to see the full error message
import { fetchRecipes } from 'redux/operations';
// @ts-expect-error TS(6142): Module '../RecipeItem/RecipeItem' was resolved to ... Remove this comment to see the full error message
import { RecipeItem } from '../RecipeItem/RecipeItem';
// @ts-expect-error TS(2307): Cannot find module 'components/modals/Modal/Modal'... Remove this comment to see the full error message
import { Modal } from "components/modals/Modal/Modal"
// @ts-expect-error TS(2307): Cannot find module 'components/modals/RecipeDetail... Remove this comment to see the full error message
import { RecipesDetails } from "components/modals/RecipeDetails/RecipeDetails";
// @ts-expect-error TS(2307): Cannot find module 'hooks/useModal' or its corresp... Remove this comment to see the full error message
import { useModal } from 'hooks/useModal';
// @ts-expect-error TS(2307): Cannot find module './ResipesList.module.css' or i... Remove this comment to see the full error message
import css from './ResipesList.module.css';

export const RecipesList = ({
  perPage
}: any) => {
  const dispatch = useDispatch();

  const [filtersSearchParams] = useSearchParams();

  const params = useMemo(
    // @ts-expect-error TS(2550): Property 'fromEntries' does not exist on type 'Obj... Remove this comment to see the full error message
    () => Object.fromEntries([...filtersSearchParams]),
    [filtersSearchParams]
  );
  
  const { page, title, category, area, ingredient, time } = params;

const { showModal, handleOpenModal, handleCloseModal, searchParams } = useModal();
  const recipes = useSelector(selectRecipes);

 
 
  useEffect(() => {

    if (searchParams.get('id')) {
  
        handleOpenModal(searchParams.get('id'));

    }
// eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])


  useEffect(() => {
    const paramsForFetch = {
      page: page ?? 1,
      title: title ?? '',
      category: category ?? '',
      area: area ?? '',
      ingredient: ingredient ?? '',
      time: time ?? '',
      limit: perPage
    }

    dispatch(fetchRecipes(paramsForFetch));

  }, [dispatch, page, title, category, area, ingredient, time, perPage]);

  // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
  return <>
    {/* @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
    <ul className={css.list}>
      {/* @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
      {(recipes as any).map((recipe: any) => <RecipeItem recipeData={recipe}/>)}
    </ul>
    {/* @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
    {showModal && (<Modal onClose={handleCloseModal}>
      {/* @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
      <RecipesDetails recipeId={searchParams.get('id')}/>
    </Modal>)}
  </>;
}