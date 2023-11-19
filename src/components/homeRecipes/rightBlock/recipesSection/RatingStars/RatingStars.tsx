import Rating from '@mui/material/Rating';
import svg from "images/sprite.svg";
import css from "./RatingStars.module.css";

export const RatingStars = ({
  rating,
  fillNoFilled = css.noFilled
}: any) => {
  return (
    <>
        <Rating
          value={rating}
          max={5}
          precision={1}
          readOnly
          className={css.ratingList}
          icon={
            <svg className={`${css.star} ${css.filled}`} width="16" height="16" >
              <use href={`${svg}#star`}></use>
            </svg>}
          emptyIcon={
            <svg className={`${css.star} ${fillNoFilled}`} width="16" height="16">
              <use href={`${svg}#star`}></use>
            </svg>}
        />

    </>
  );
};