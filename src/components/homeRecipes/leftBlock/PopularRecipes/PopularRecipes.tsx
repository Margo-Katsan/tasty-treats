import { useEffect, useState } from "react";
import { useWindowSize } from "@uidotdev/usehooks";
import { PopularRecipeItem } from "../PopularRecipeItem/PopularRecipeItem";
import { fetchPopularRecipes } from "api";
import { IPopularRecipe } from "interface/PopularRecipe";
import css from './PopularRecipes.module.css'
 
export const PopularRecipes = () => {
  const [popularRecipes, setPopularRecipes] = useState<IPopularRecipe[]>([]);

  const windowWidth = useWindowSize()?.width ?? 0;

  useEffect(() => {
    async function fetchingPopularRecipes() {
      try {
        const fetchedPopularRecipes = await fetchPopularRecipes();
        setPopularRecipes(fetchedPopularRecipes);

      } catch (error) {
        
      }
    }
    fetchingPopularRecipes();
  }, [])

  return (
    <section>
      <h3 className={css.title}>Popular recipes</h3>
      <ul className={css.list}>
        {popularRecipes.map((recipe, index) => {
          if (windowWidth < 768 && index >= 2) {
            return null;
          }
          return (<PopularRecipeItem recipeData={recipe} />)
        })}
      </ul>
    </section>
  )
}