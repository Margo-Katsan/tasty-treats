// @ts-expect-error TS(6142): Module '../Categories/Categories' was resolved to ... Remove this comment to see the full error message
import { Categories } from "../Categories/Categories";
// @ts-expect-error TS(6142): Module '../PopularRecipes/PopularRecipes' was reso... Remove this comment to see the full error message
import { PopularRecipes } from "../PopularRecipes/PopularRecipes";
// @ts-expect-error TS(2307): Cannot find module './Aside.module.css' or its cor... Remove this comment to see the full error message
import css from './Aside.module.css'

export const Aside = () => {
  return (
    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <aside className={css.aside}>
      {/* @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
      <Categories />
      {/* @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
      <PopularRecipes />
    </aside>
  )
}