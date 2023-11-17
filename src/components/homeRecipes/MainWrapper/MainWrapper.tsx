// @ts-expect-error TS(2307): Cannot find module 'components/homeRecipes/leftBlo... Remove this comment to see the full error message
import { Aside } from "components/homeRecipes/leftBlock/Aside/Aside";
// @ts-expect-error TS(2307): Cannot find module 'components/homeRecipes/rightBl... Remove this comment to see the full error message
import { RecipesSection } from "components/homeRecipes/rightBlock/recipesSection/RecipesSection/RecipesSection";
// @ts-expect-error TS(2307): Cannot find module 'components/homeRecipes/rightBl... Remove this comment to see the full error message
import { SearchSection } from "components/homeRecipes/rightBlock/searchSection/SearchSection/SearchSection";
// @ts-expect-error TS(2307): Cannot find module './MainWrapper.module.css' or i... Remove this comment to see the full error message
import css from "./MainWrapper.module.css";

export const MainWrapper = () => {
  return (
    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <div className={`${css.mainWrapper} container`}>
      {/* @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
      <div className={css.leftBlock}>
        {/* @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
        <Aside />
      </div>
      {/* @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
      <div className={css.rightBlock}>
        {/* @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
        <SearchSection />
        {/* @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
        <RecipesSection />
      </div>
    </div>
  )
}