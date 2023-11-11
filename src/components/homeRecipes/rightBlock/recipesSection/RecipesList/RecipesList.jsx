import { useEffect, useState, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import { selectRecipes } from 'redux/selectors';
import { fetchRecipes } from 'redux/operations';
import { RecipeItem } from '../RecipeItem/RecipeItem';
import { useWindowSize } from "@uidotdev/usehooks";
import { Modal } from "components/modals/Modal/Modal"
import { RecipesDetails } from "components/modals/RecipeDetails/RecipeDetails";
import { useModal } from 'hooks/useModal';
import css from './ResipesList.module.css';

export const RecipesList = () => {
  const size = useWindowSize();
  const dispatch = useDispatch();
  const [filtersSearchParams] = useSearchParams();

  const params = useMemo(
    () => Object.fromEntries([...filtersSearchParams]),
    [filtersSearchParams]
  );
  
  const { page, title, category, area, ingredient, time } = params;

  
  const [perPage, setPerPage] = useState(6);
  const recipes = useSelector(selectRecipes);
  

  const { showModal, handleOpenModal, handleCloseModal, searchParams, openModal } = useModal();

  useEffect(() => {
    if (size.width >= 1200) { 
      setPerPage(9);
    }
    else if (size.width >= 768) {
      setPerPage(8);
    }
    else if (size.width < 768) {
      setPerPage(6)
      
    }
  }, [dispatch, size.width]);

  useEffect(() => {
    if (searchParams.get('id') !== null && !showModal) {
      openModal();
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

  return (
    <>
      <ul className={css.list}>
        {recipes.map(recipe => <RecipeItem recipeData={recipe} onOpen={handleOpenModal} /> )}
      </ul>
      <Modal showModal={showModal} onClose={handleCloseModal}>
        <RecipesDetails recipeId={searchParams.get('id')} />
      </Modal>
    </>
  )
}