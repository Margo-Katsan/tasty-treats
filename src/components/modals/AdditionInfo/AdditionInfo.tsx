import {FC} from "react"
import { RatingStars } from "components/homeRecipes/rightBlock/recipesSection/RatingStars/RatingStars";
import { Tags } from "../Tags/Tags";
import css from './AdditionInfo.module.css';

interface IAdditionInfoProps {
  windowWidth: number;
  tags: string[];
  rating: number;
  time: string;
}

export const AdditionInfo: FC<IAdditionInfoProps> = ({windowWidth, tags, rating, time}) => {
  return (
    <div className={css.container}>
      {windowWidth >= 786 && (
        <Tags tags={tags}/>
      )}
      <div className={css.wrapper}>
        <div className={css.ratingWrapper}>
          <span className={css.ratingNumber}>{rating.toFixed(1)}</span>
          <RatingStars rating={rating} fillNoFilled={css.noFilled} />
        </div>
        <span className={css.time}>{time} min</span>
      </div>
    </div>
  )
}