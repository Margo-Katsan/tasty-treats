// @ts-expect-error TS(2307): Cannot find module 'images/sprite.svg' or its corr... Remove this comment to see the full error message
import svg from "images/sprite.svg";
// @ts-expect-error TS(2307): Cannot find module './NoRecipesFound.module.css' o... Remove this comment to see the full error message
import css from "./NoRecipesFound.module.css"

export const NoRecipesFound = () => {
  return (
    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <div className={css.container}>
      {/* @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
      <svg className={css.icon} width="97" height="83">
  {/* @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
  <use href={`${svg}#chefs-hat`}></use>
</svg>
      {/* @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
      <p className={css.text}>Unfortunately, no recipes match the selected filters.</p>
    </div>
  )
}