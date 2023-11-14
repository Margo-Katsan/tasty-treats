import { useEffect, useState } from "react";
import ReactModal from 'react-modal';
import { useWindowSize } from "@uidotdev/usehooks";

import { VideoPlayer } from "../VideoPlayer/VideoPlayer";
import { AdditionInfo } from "../AdditionInfo/AdditionInfo";
import { IngredientsList } from "../IngredientsList/IngredientsList";
import { AddToFavoritesBtn } from "../AddToFavoritesBtn/AddToFavoritesBtn";
import { GiveARatingBtn } from "../GiveARatingBtn/GiveARatingBtn";
import { Tags } from "../Tags/Tags";
import { fetchRecipeById } from "api";

import css from './RecipeDetails.module.css'

ReactModal.setAppElement('#modal-root');
export const RecipesDetails = ({ recipeId, onToggleFavorites, recipeData, isFavorite }) => {
  const windowWidth = useWindowSize().width;

  const [title, setTitle] = useState('');
  const [video, setVideo] = useState('');
  const [tags, setTags] = useState([]);
  const [rating, setRating] = useState(0);
  const [ingredients, setIngredients] = useState([]);
  const [instructions, setInstructions] = useState('');
  const [preview, setPreview] = useState('');
  const [time, setTime] = useState(0);

  useEffect(() => {
    async function fetchingRecipeById() {
      const fetchedRecipe = await fetchRecipeById(recipeId);
      setTitle(fetchedRecipe.title);
      setVideo(fetchedRecipe.youtube);
      setTags(fetchedRecipe.tags);
      setRating(fetchedRecipe.rating);
      setIngredients(fetchedRecipe.ingredients);
      setInstructions(fetchedRecipe.instructions);
      setPreview(fetchedRecipe.preview);
      setTime(fetchedRecipe.time)
    }
    fetchingRecipeById();
  }, [recipeId])

  

  return (
 
      <div className={css.content}>
        {windowWidth >= 786 && (
          <h1 className={css.title}>{title}</h1>
        )}
        <VideoPlayer video={video} preview={preview}/>
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
        <AddToFavoritesBtn onToggleFavorites={onToggleFavorites} recipeData={recipeData} isFavorite={isFavorite} />
        <GiveARatingBtn />
      </div>
      
        
      </div>

      

  );
}

