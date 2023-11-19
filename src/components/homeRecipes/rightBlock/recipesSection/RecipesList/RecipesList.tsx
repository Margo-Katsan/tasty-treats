import { useEffect, useMemo, FC} from 'react';
import { useSelector } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import { selectRecipes } from 'redux/selectors';
import { fetchRecipes } from 'redux/operations';
import { RecipeItem } from '../RecipeItem/RecipeItem';
import css from './ResipesList.module.css';
import { IFetchRecipes } from 'redux/operations';
import { useAppDispatch } from 'redux/store';

interface IRecipesListProps {
  perPage: number
}

export const RecipesList: FC<IRecipesListProps> = ({perPage}) => {
  const dispatch = useAppDispatch()

  const [filtersSearchParams] = useSearchParams();

  const params = useMemo(
    () => Object.fromEntries([...filtersSearchParams]),
    [filtersSearchParams]
  );
  
  const { page, title, category, area, ingredient, time } = params;


  const recipes = useSelector(selectRecipes);




  useEffect(() => {
    const paramsForFetch: IFetchRecipes = {
      page: page ?? '1',
      title: title ?? '',
      category: category ?? '',
      area: area ?? '',
      ingredient: ingredient ?? '',
      time: time ?? '',
      limit: `${perPage}`
    }

    dispatch(fetchRecipes(paramsForFetch));
    

  }, [dispatch, page, title, category, area, ingredient, time, perPage]);

  return <>
 
    <ul className={css.list}>
   
      {(recipes).map((recipe) => <RecipeItem recipeData={recipe}/>)}
    </ul>
 
  </>;
}