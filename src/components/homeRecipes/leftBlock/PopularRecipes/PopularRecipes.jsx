import { useEffect, useState } from "react";
import { useWindowSize } from "@uidotdev/usehooks";
import { PopularRecipeItem } from "../PopularRecipeItem/PopularRecipeItem";
import { Modal } from "components/modals/Modal/Modal"
import { RecipesDetails } from "components/modals/RecipeDetails/RecipeDetails";
import { useModal } from 'hooks/useModal';
import { fetchPopularRecipes } from "api";
import css from './PopularRecipes.module.css'

export const PopularRecipes = () => {
  const [popularRecipes, setPopularRecipes] = useState([]);
  const windowWidth = useWindowSize().width;
  const { showModal, handleOpenModal, handleCloseModal, searchParams } = useModal();
  
  useEffect(() => {
    async function fetchingPopularRecipes() {
      try {
        const fetchedPopularRecipes = await fetchPopularRecipes();
        setPopularRecipes(fetchedPopularRecipes);

      } catch (error) {
        
      }
    }
    fetchingPopularRecipes();
  }, [])

  return (
    <section>
      <h3 className={css.title}>Popular recipes</h3>
      <ul className={css.list}>
        
        {popularRecipes.map((recipe, index) => {
          if (windowWidth < 768 && index >= 2) {
            return null;
          }
          return (<PopularRecipeItem recipeData={recipe} onOpen={handleOpenModal} />)
          
        })}
        
      </ul>
      <Modal showModal={showModal} onClose={handleCloseModal}>
        <RecipesDetails recipeId={searchParams.get('id')} />
      </Modal>
    </section>
  )
}