import { Categories } from "../Categories/Categories";
import { PopularRecipes } from "../PopularRecipes/PopularRecipes";
import css from './Aside.module.css'

export const Aside = () => {
  return (
    <aside className={css.aside}>
      <Categories />
      <PopularRecipes />
    </aside>
  )
}