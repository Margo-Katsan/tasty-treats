import { Aside } from "components/homeRecipes/leftBlock/Aside/Aside";
import { RecipesSection } from "components/homeRecipes/rightBlock/recipesSection/RecipesSection/RecipesSection";
import { SearchSection } from "components/homeRecipes/rightBlock/searchSection/SearchSection/SearchSection";
import css from "./MainWrapper.module.css";

export const MainWrapper = () => {
  return (
    <div className={`${css.mainWrapper} container`}>
      <div className={css.leftBlock}>
        <Aside />
      </div>
      <div className={css.rightBlock}>
        <SearchSection />
        <RecipesSection />
      </div>
    </div>
  )
}