import { HomePagination } from "../HomePagination/HomePagination";
import { RecipesList } from "../RecipesList/RecipesList";
import { selectIsLoading, selectTotalRecipes } from "redux/selectors";
import { Loader } from "components/Loader/Loader";
import css from "./RecipesSection.module.css"
import { useSelector } from "react-redux";
import { useWindowSize } from "@uidotdev/usehooks";
import { useEffect, useState, } from 'react';
import { NoRecipesFound } from "../NoRecipesFound/NoRecipesFound";


export const RecipesSection = () => {
  const initialPerPage = () => {
    if (windowWidth >= 1200) { 
      return 9;
    }
    else if (windowWidth >= 768) {
      return 8;
    }
    else if (windowWidth < 768) {
      return 6;  
    }
  }
  const windowWidth = useWindowSize().width;
  const [perPage, setPerPage] = useState(initialPerPage());
  const isLoading = useSelector(selectIsLoading);
  const totalRecipes = useSelector(selectTotalRecipes)


   useEffect(() => {
    if (windowWidth >= 1200) { 
      setPerPage(9);
    }
    else if (windowWidth >= 768) {
      setPerPage(8);
    }
    else if (windowWidth < 768) {
      setPerPage(6)  
    }
  }, [windowWidth]);
  
  return (
    <section className={css.section}>
      {isLoading && (
        <Loader />
      )}
      {!totalRecipes && (
        <NoRecipesFound />
      )}
      <RecipesList perPage={perPage} />
      {totalRecipes > perPage && (
        <HomePagination />
      )}
      
    </section>
  )
}