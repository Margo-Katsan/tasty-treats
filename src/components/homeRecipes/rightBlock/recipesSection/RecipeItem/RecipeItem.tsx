import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
// @ts-expect-error TS(2307): Cannot find module 'redux/favoritesSlice' or its c... Remove this comment to see the full error message
import { toogleFavorites } from "redux/favoritesSlice";
// @ts-expect-error TS(2307): Cannot find module 'redux/selectors' or its corres... Remove this comment to see the full error message
import { selectFavorites } from "redux/selectors";
// @ts-expect-error TS(6142): Module '../RatingStars/RatingStars' was resolved t... Remove this comment to see the full error message
import { RatingStars } from "../RatingStars/RatingStars";
// @ts-expect-error TS(2307): Cannot find module 'components/modals/Modal/Modal'... Remove this comment to see the full error message
import { Modal } from "components/modals/Modal/Modal"
// @ts-expect-error TS(2307): Cannot find module 'components/modals/RecipeDetail... Remove this comment to see the full error message
import { RecipesDetails } from "components/modals/RecipeDetails/RecipeDetails";
// @ts-expect-error TS(2307): Cannot find module 'hooks/useModal' or its corresp... Remove this comment to see the full error message
import { useModal } from 'hooks/useModal';
// @ts-expect-error TS(2307): Cannot find module 'images/sprite.svg' or its corr... Remove this comment to see the full error message
import svg from "images/sprite.svg";
// @ts-expect-error TS(2307): Cannot find module './RecipeItem.module.css' or it... Remove this comment to see the full error message
import css from './RecipeItem.module.css'

export const RecipeItem = ({
  recipeData,
  favoriteClassName = ""
}: any) => {
  const { _id, thumb, title, description, rating } = recipeData;
  const { item, recipe, heartBtn, heartIcon, info, name, desc, ratingAndBtnWrapper, ratingWrapper, ratingNumber, btn, heartIconFilled } = css;
  const dispatch = useDispatch();
  const favorites = useSelector(selectFavorites);
  const { showModal, handleOpenModal, handleCloseModal, searchParams } = useModal();

  const [isFavorite, setIsFavorite] = useState(false)
  useEffect(() => {
    setIsFavorite((favorites as any).filter((favorite: any) => favorite._id === recipeData._id).length !== 0);
}, [favorites, recipeData]);
 

  const handleToogleFavorites = (recipeData: any) => {
    dispatch(toogleFavorites(recipeData));
    setIsFavorite(isFavorite => !isFavorite);
  }
  return (
    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <>
      {/* @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
      <li key={_id} className={`${item} ${favoriteClassName}`}>
      {/* @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
      <article className={recipe} style={{ backgroundImage: `linear-gradient(var(--background-recipe-gradient)), url(${thumb})` }}>
        {/* @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
        <button className={heartBtn} onClick={() => handleToogleFavorites(recipeData)}>
          {/* @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
          <svg className={`${heartIcon} ${isFavorite && heartIconFilled}`} width="22" height="22">
            {/* @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
            <use href={`${svg}#heart`}></use>
          </svg>
        </button>
          {/* @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
          <div className={info}>
            {/* @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
            <div className={css.textInfo}>
              {/* @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
              <h3 className={name}>{title}</h3>
          {/* @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
          <p className={desc}>{description}</p>
            </div>
          
          {/* @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
          <div className={ratingAndBtnWrapper}>
            {/* @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
            <div className={ratingWrapper}>
              {/* @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
              <span className={ratingNumber}>{rating.toFixed(1)}</span>
              {/* @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
              <RatingStars rating={rating}/>
            </div>
            {/* @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
            <button className={btn} type="button" onClick={() => handleOpenModal(_id)}>
              See recipe
            </button>
          </div>
        </div>
      </article>
      </li>
      {showModal && (
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <Modal onClose={handleCloseModal}>
        {/* @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
        <RecipesDetails onToggleFavorites={handleToogleFavorites} recipeId={searchParams.get('id')} recipeData={recipeData} isFavorite={isFavorite} />
      </Modal>
      )}
      
    </>
    
    
  )
}