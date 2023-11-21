import { useEffect, useState, } from 'react';
import { useSelector } from "react-redux";
import { useWindowSize } from "@uidotdev/usehooks";
import { HomePagination } from "../HomePagination/HomePagination";
import { NoRecipesFound } from "../NoRecipesFound/NoRecipesFound";
import { RecipesList } from "../RecipesList/RecipesList";import { Loader } from "components/Loader/Loader";
import { selectIsLoading, selectTotalRecipesPages, selectTotalRecipes } from "redux/selectors";
import css from "./RecipesSection.module.css"

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
    else {
      return 0;
    }
  }
  const windowWidth = useWindowSize()?.width ?? 0;
  const [perPage, setPerPage] = useState<number>(initialPerPage());
  const isLoading = useSelector(selectIsLoading);
  const totalRecipesPages = useSelector(selectTotalRecipesPages);
  const totalRecipes = useSelector(selectTotalRecipes);


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
  
  return (<section className={css.section}>
 
      {isLoading && (<Loader />)}
      {!totalRecipes && (<NoRecipesFound />)}
      <RecipesList perPage={perPage}/>
      {totalRecipesPages !== 1 && (<HomePagination />)}
      
    </section>);
}