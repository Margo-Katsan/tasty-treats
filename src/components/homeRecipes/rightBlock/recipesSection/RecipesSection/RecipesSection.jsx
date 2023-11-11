import { HomePagination } from "../HomePagination/HomePagination";
import { RecipesList } from "../RecipesList/RecipesList";
import css from "./RecipesSection.module.css"

export const RecipesSection = () => {
  
  return (
    <section className={css.section}>
      <RecipesList />
      <HomePagination />
    </section>
  )
}