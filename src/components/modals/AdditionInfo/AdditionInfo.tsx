// @ts-expect-error TS(2307): Cannot find module 'components/homeRecipes/rightBl... Remove this comment to see the full error message
import { RatingStars } from "components/homeRecipes/rightBlock/recipesSection/RatingStars/RatingStars";
// @ts-expect-error TS(6142): Module '../Tags/Tags' was resolved to 'C:/Users/1t... Remove this comment to see the full error message
import { Tags } from "../Tags/Tags";
// @ts-expect-error TS(2307): Cannot find module './AdditionInfo.module.css' or ... Remove this comment to see the full error message
import css from './AdditionInfo.module.css';

export const AdditionInfo = ({
  windowWidth,
  tags,
  rating,
  time
}: any) => {
  return (
    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <div className={css.container}>
      {windowWidth >= 786 && (
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <Tags tags={tags}/>
      )}
      {/* @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
      <div className={css.wrapper}>
        {/* @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
        <span className={css.ratingNumber}>{rating.toFixed(1)}</span>
      {/* @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
      <RatingStars rating={rating} fillNoFilled={css.noFilled} />
        {/* @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
        <span className={css.time}>{time} min</span>
      </div>
    </div>
  )
}