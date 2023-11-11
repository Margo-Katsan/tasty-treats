import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toogleFavorites } from "redux/favoritesSlice";
import { selectFavorites } from "redux/selectors";
import { RatingStars } from "../RatingStars/RatingStars";
import svg from "images/sprite.svg";
import css from './RecipeItem.module.css'

export const RecipeItem = ({ recipeData, onOpen, favoriteClassName = "" }) => {
  const { _id, thumb, title, description, rating } = recipeData;
  const { item, recipe, heartBtn, heartIcon, info, name, desc, ratingAndBtnWrapper, ratingWrapper, ratingNumber, btn, heartIconFilled } = css;
  const dispatch = useDispatch();
  const favorites = useSelector(selectFavorites);

  const [isFavorite, setIsFavorite] = useState(false)
  useEffect(() => {
    setIsFavorite(favorites.filter(favorite => favorite._id === recipeData._id).length !== 0)
  }, [favorites, recipeData])
 
  const handleToogleFavorites = recipeData => {
    dispatch(toogleFavorites(recipeData));
    setIsFavorite(isFavorite => !isFavorite);
  }

  return (
    <li key={_id} className={`${item} ${favoriteClassName}`}>
      <article className={recipe} style={{ backgroundImage: `linear-gradient(var(--background-recipe-gradient)), url(${thumb})` }}>
        <button className={heartBtn} onClick={() => handleToogleFavorites(recipeData)}>
          <svg className={`${heartIcon} ${isFavorite && heartIconFilled}`} width="22" height="22">
            <use href={`${svg}#heart`}></use>
          </svg>
        </button>
        <div className={info}>
          <h3 className={name}>{title}</h3>
          <p className={desc}>{description}</p>
          <div className={ratingAndBtnWrapper}>
            <div className={ratingWrapper}>
              <span className={ratingNumber}>{rating.toFixed(1)}</span>
              <RatingStars rating={rating}/>
            </div>
            <button className={btn} type="button" onClick={() => onOpen(_id)}>
              See recipe
            </button>
          </div>
        </div>
      </article>
    </li>
    
  )
}