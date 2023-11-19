import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { useWindowSize } from "@uidotdev/usehooks";
import { VideoPlayer } from "../VideoPlayer/VideoPlayer";
import { AdditionInfo } from "../AdditionInfo/AdditionInfo";
import { IngredientsList } from "../IngredientsList/IngredientsList";
import { AddToFavoritesBtn } from "../AddToFavoritesBtn/AddToFavoritesBtn";
import { GiveARatingBtn } from "../GiveARatingBtn/GiveARatingBtn";
import { Tags } from "../Tags/Tags";
import { fetchRecipeById } from "api";
import { IDetailedRecipeData } from "interface/DetailedRecipeData";
import css from './RecipeDetails.module.css';

export const RecipesDetails = () => {
  const windowWidth = useWindowSize()?.width ?? 0;

  const [searchParams] = useSearchParams();

  const [recipeData, setRecipeData] = useState<IDetailedRecipeData>({
    area: "",
    category: "",
    description: "",
    ingredients: [],
    instructions: "",
    preview: "",
    rating: 0,
    tags: [],
    thumb: "",
    time: "",
    title: "",
    whoRated: 0,
    youtube: "",
    _id: ""
  })

  useEffect(() => {
    async function fetchingRecipeById() {
      const fetchedRecipe = await fetchRecipeById(searchParams.get('id') as string);
      setRecipeData(fetchedRecipe);
    }
    fetchingRecipeById();
  }, [searchParams])

  const { title, youtube, preview, tags, rating, time, ingredients, instructions } = recipeData;

  return (
    <div className={css.content}>
      {windowWidth >= 786 && (
        <h1 className={css.title}>{recipeData.title}</h1>
      )}
      <VideoPlayer video={youtube} preview={preview}/>
      {windowWidth < 786 && (
        <h1 className={css.title}>{title}</h1>
      )}
      <AdditionInfo windowWidth={windowWidth} tags={tags} rating={rating} time={time}/>

      <IngredientsList ingredients={ingredients} />
      {windowWidth < 786 && (
        <Tags tags={tags}/>
      )}

      <p className={css.instructions}>{instructions}</p>
      <div className={css.buttons}>
        <AddToFavoritesBtn recipeData={recipeData}/>
        <GiveARatingBtn />
      </div>
    </div>
  );
}

