import { useEffect, useState, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import { selectRecipes } from 'redux/selectors';
import { fetchRecipes } from 'redux/operations';
import { RecipeItem } from '../RecipeItem/RecipeItem';
import { useWindowSize } from "@uidotdev/usehooks";
import css from './ResipesList.module.css';

export const RecipesList = () => {
  const windowWidth = useWindowSize().width;
  const dispatch = useDispatch();
  const [filtersSearchParams] = useSearchParams();

  const params = useMemo(
    () => Object.fromEntries([...filtersSearchParams]),
    [filtersSearchParams]
  );
  
  const { page, title, category, area, ingredient, time } = params;

  const initialPerPage = () => {
    if (windowWidth >= 1200) { 
      return 9;
    }
    else if (windowWidth >= 768) {
      return 8;
    }
    else if (windowWidth < 768) {
      return 6;  
    }
  }
  
  const [perPage, setPerPage] = useState(initialPerPage());
  const recipes = useSelector(selectRecipes);
  

  useEffect(() => {
    if (windowWidth >= 1200) { 
      setPerPage(9);
    }
    else if (windowWidth >= 768) {
      setPerPage(8);
    }
    else if (windowWidth < 768) {
      setPerPage(6)  
    }
  }, [windowWidth]);


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