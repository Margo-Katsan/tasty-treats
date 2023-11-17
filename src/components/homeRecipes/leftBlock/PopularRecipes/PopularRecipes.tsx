import { useEffect, useState } from "react";
import { useWindowSize } from "@uidotdev/usehooks";
// @ts-expect-error TS(6142): Module '../PopularRecipeItem/PopularRecipeItem' wa... Remove this comment to see the full error message
import { PopularRecipeItem } from "../PopularRecipeItem/PopularRecipeItem";
// @ts-expect-error TS(2307): Cannot find module 'components/modals/Modal/Modal'... Remove this comment to see the full error message
import { Modal } from "components/modals/Modal/Modal"
// @ts-expect-error TS(2307): Cannot find module 'components/modals/RecipeDetail... Remove this comment to see the full error message
import { RecipesDetails } from "components/modals/RecipeDetails/RecipeDetails";
// @ts-expect-error TS(2307): Cannot find module 'hooks/useModal' or its corresp... Remove this comment to see the full error message
import { useModal } from 'hooks/useModal';
// @ts-expect-error TS(2307): Cannot find module 'api' or its corresponding type... Remove this comment to see the full error message
import { fetchPopularRecipes } from "api";
// @ts-expect-error TS(2307): Cannot find module './PopularRecipes.module.css' o... Remove this comment to see the full error message
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
    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <section>
      {/* @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
      <h3 className={css.title}>Popular recipes</h3>
      {/* @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
      <ul className={css.list}>
        
        {popularRecipes.map((recipe, index) => {
          // @ts-expect-error TS(2531): Object is possibly 'null'.
          if (windowWidth < 768 && index >= 2) {
            return null;
          }
          // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          return (<PopularRecipeItem recipeData={recipe} onOpen={handleOpenModal} />)
          
        })}
        
      </ul>
      {showModal && (
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <Modal onClose={handleCloseModal}>
        {/* @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
        <RecipesDetails recipeId={searchParams.get('id')} />
      </Modal>
      )}
      
    </section>
  )
}