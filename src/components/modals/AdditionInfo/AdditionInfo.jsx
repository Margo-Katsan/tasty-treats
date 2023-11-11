import { RatingStars } from "components/homeRecipes/rightBlock/recipesSection/RatingStars/RatingStars";
import Rating from '@mui/material/Rating';
import svg from "images/sprite.svg";
import { Tags } from "../Tags/Tags";
import css from './AdditionInfo.module.css';

export const AdditionInfo = ({ windowWidth, tags, rating, time }) => {
  return (
    <div className={css.container}>
      {windowWidth >= 786 && (
        <Tags tags={tags}/>
      )}
      <div className={css.wrapper}>
        <span className={css.ratingNumber}>{rating.toFixed(1)}</span>
      <RatingStars rating={rating} fillNoFilled={css.noFilled} />
        <span className={css.time}>{time} min</span>
      </div>
    </div>
  )
}