// @ts-expect-error TS(2307): Cannot find module './IngredientsList.module.css' ... Remove this comment to see the full error message
import css from './IngredientsList.module.css';

export const IngredientsList = ({
  ingredients
}: any) => {
  return (
    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <ul className={css.list}>
      {/* @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
      {ingredients.map((ingredient: any) => <li key={ingredient._id} className={css.item}>
        {/* @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
        <p className={css.name}>{ingredient.name}</p>
        {/* @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
        <span className={css.measure}>{ingredient.measure}</span>
      </li>)}
    </ul>
  );
}