import { HomePagination } from "../HomePagination/HomePagination";
import { RecipesList } from "../RecipesList/RecipesList";
import { selectIsLoading } from "redux/selectors";
import { Loader } from "components/Loader/Loader";
import css from "./RecipesSection.module.css"
import { useSelector } from "react-redux";

export const RecipesSection = () => {
  const isLoading = useSelector(selectIsLoading);
  
  return (
    <section className={css.section}>
      {isLoading && (
        <Loader />
      )}
      <RecipesList />
      <HomePagination />
    </section>
  )
}