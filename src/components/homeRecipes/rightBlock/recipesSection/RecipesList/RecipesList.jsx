import { useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import { selectRecipes } from 'redux/selectors';
import { fetchRecipes } from 'redux/operations';
import { RecipeItem } from '../RecipeItem/RecipeItem';
import css from './ResipesList.module.css';

export const RecipesList = ({perPage}) => {
  const dispatch = useDispatch();
  const [filtersSearchParams] = useSearchParams();

  const params = useMemo(
    () => Object.fromEntries([...filtersSearchParams]),
    [filtersSearchParams]
  );
  
  const { page, title, category, area, ingredient, time } = params;


  const recipes = useSelector(selectRecipes);
  

 


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

  return (
    <>
      <ul className={css.list}>
        {recipes.map(recipe => <RecipeItem recipeData={recipe} /> )}
      </ul>
    </>
  )
}