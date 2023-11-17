import Rating from '@mui/material/Rating';
// @ts-expect-error TS(2307): Cannot find module 'images/sprite.svg' or its corr... Remove this comment to see the full error message
import svg from "images/sprite.svg";
// @ts-expect-error TS(2307): Cannot find module './RatingStars.module.css' or i... Remove this comment to see the full error message
import css from "./RatingStars.module.css";

export const RatingStars = ({
  rating,
  fillNoFilled = css.noFilled
}: any) => {
  return (
    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <>

        {/* @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
        <Rating
          value={rating}
          max={5}
          precision={1}
          readOnly
          className={css.ratingList}
          icon={
            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <svg className={`${css.star} ${css.filled}`} width="16" height="16" >
              {/* @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
              <use href={`${svg}#star`}></use>
            </svg>}
          emptyIcon={
            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <svg className={`${css.star} ${fillNoFilled}`} width="16" height="16">
              {/* @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
              <use href={`${svg}#star`}></use>
            </svg>}
        />

    </>
  );
};