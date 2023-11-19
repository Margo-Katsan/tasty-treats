import { FC } from "react";
import { IPopularRecipe } from "interface/PopularRecipe"
import { Modal } from "components/modals/Modal/Modal"
import { RecipesDetails } from "components/modals/RecipeDetails/RecipeDetails";
import { useModal } from 'hooks/useModal';
import css from './PopularRecipeItem.module.css';

interface IPopularRecipeItemProps {
  recipeData: IPopularRecipe;
}

export const PopularRecipeItem: FC<IPopularRecipeItemProps> = ({recipeData}) => {
  const { _id, preview, description, title } = recipeData;
  
  const { showModal, handleOpenModal, handleCloseModal } = useModal();

  return (
    <>
      <li key={_id} className={css.item} onClick={() => handleOpenModal(_id)}>
        <img src={preview} alt={title} width="64" height="64" className={css.img} />
        <div className={css.info}>
          <h4 className={css.title}>{title}</h4>
          <p className={css.desc}>{description}</p>
        </div>
      </li>
      {showModal && (
        <Modal onClose={handleCloseModal}>
          <RecipesDetails />
        </Modal>
      )}
    </>
  )
}