// @ts-expect-error TS(6142): Module '../HomePagination/HomePagination' was reso... Remove this comment to see the full error message
import { HomePagination } from "../HomePagination/HomePagination";
// @ts-expect-error TS(6142): Module '../RecipesList/RecipesList' was resolved t... Remove this comment to see the full error message
import { RecipesList } from "../RecipesList/RecipesList";
// @ts-expect-error TS(2307): Cannot find module 'redux/selectors' or its corres... Remove this comment to see the full error message
import { selectIsLoading, selectTotalRecipes } from "redux/selectors";
// @ts-expect-error TS(2307): Cannot find module 'components/Loader/Loader' or i... Remove this comment to see the full error message
import { Loader } from "components/Loader/Loader";
// @ts-expect-error TS(2307): Cannot find module './RecipesSection.module.css' o... Remove this comment to see the full error message
import css from "./RecipesSection.module.css"
import { useSelector } from "react-redux";
import { useWindowSize } from "@uidotdev/usehooks";
import { useEffect, useState, } from 'react';
// @ts-expect-error TS(6142): Module '../NoRecipesFound/NoRecipesFound' was reso... Remove this comment to see the full error message
import { NoRecipesFound } from "../NoRecipesFound/NoRecipesFound";


export const RecipesSection = () => {
  const initialPerPage = () => {
    // @ts-expect-error TS(2531): Object is possibly 'null'.
    if (windowWidth >= 1200) { 
      return 9;
    }
    // @ts-expect-error TS(2531): Object is possibly 'null'.
    else if (windowWidth >= 768) {
      return 8;
    }
    // @ts-expect-error TS(2531): Object is possibly 'null'.
    else if (windowWidth < 768) {
      return 6;  
    }
  }
  const windowWidth = useWindowSize().width;
  const [perPage, setPerPage] = useState(initialPerPage());
  const isLoading = useSelector(selectIsLoading);
  const totalRecipes = useSelector(selectTotalRecipes)


   useEffect(() => {
    // @ts-expect-error TS(2531): Object is possibly 'null'.
    if (windowWidth >= 1200) { 
      setPerPage(9);
    }
    // @ts-expect-error TS(2531): Object is possibly 'null'.
    else if (windowWidth >= 768) {
      setPerPage(8);
    }
    // @ts-expect-error TS(2531): Object is possibly 'null'.
    else if (windowWidth < 768) {
      setPerPage(6)  
    }
  }, [windowWidth]);
  
  // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
  return (<section className={css.section}>
      {/* @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
      {isLoading && (<Loader />)}
      {/* @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
      {!totalRecipes && (<NoRecipesFound />)}
      {/* @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
      <RecipesList perPage={perPage}/>
      {/* @ts-expect-error TS(2532): Object is possibly 'undefined'. */}
      {totalRecipes as any > perPage && (<HomePagination />)}
      
    </section>);
}