import { useEffect, useState } from "react";
// @ts-expect-error TS(2307): Cannot find module 'react-modal' or its correspond... Remove this comment to see the full error message
import ReactModal from 'react-modal';
import { useWindowSize } from "@uidotdev/usehooks";

// @ts-expect-error TS(6142): Module '../VideoPlayer/VideoPlayer' was resolved t... Remove this comment to see the full error message
import { VideoPlayer } from "../VideoPlayer/VideoPlayer";
// @ts-expect-error TS(6142): Module '../AdditionInfo/AdditionInfo' was resolved... Remove this comment to see the full error message
import { AdditionInfo } from "../AdditionInfo/AdditionInfo";
// @ts-expect-error TS(6142): Module '../IngredientsList/IngredientsList' was re... Remove this comment to see the full error message
import { IngredientsList } from "../IngredientsList/IngredientsList";
// @ts-expect-error TS(6142): Module '../AddToFavoritesBtn/AddToFavoritesBtn' wa... Remove this comment to see the full error message
import { AddToFavoritesBtn } from "../AddToFavoritesBtn/AddToFavoritesBtn";
// @ts-expect-error TS(6142): Module '../GiveARatingBtn/GiveARatingBtn' was reso... Remove this comment to see the full error message
import { GiveARatingBtn } from "../GiveARatingBtn/GiveARatingBtn";
// @ts-expect-error TS(6142): Module '../Tags/Tags' was resolved to 'C:/Users/1t... Remove this comment to see the full error message
import { Tags } from "../Tags/Tags";
// @ts-expect-error TS(2307): Cannot find module 'api' or its corresponding type... Remove this comment to see the full error message
import { fetchRecipeById } from "api";

// @ts-expect-error TS(2307): Cannot find module './RecipeDetails.module.css' or... Remove this comment to see the full error message
import css from './RecipeDetails.module.css'

ReactModal.setAppElement('#modal-root');
export const RecipesDetails = ({
  recipeId,
  onToggleFavorites,
  recipeData,
  isFavorite
}: any) => {
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
 
      // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <div className={css.content}>
        {/* @ts-expect-error TS(2531): Object is possibly 'null'. */}
        {windowWidth >= 786 && (
          // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <h1 className={css.title}>{title}</h1>
        )}
        {/* @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
        <VideoPlayer video={video} preview={preview}/>
        {/* @ts-expect-error TS(2531): Object is possibly 'null'. */}
        {windowWidth < 786 && (
          // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <h1 className={css.title}>{title}</h1>
        )}
        {/* @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
        <AdditionInfo windowWidth={windowWidth} tags={tags} rating={rating} time={time}/>

        {/* @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
        <IngredientsList ingredients={ingredients} />
        {/* @ts-expect-error TS(2531): Object is possibly 'null'. */}
        {windowWidth < 786 && (
          // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <Tags tags={tags}/>
        )}

      {/* @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
      <p className={css.instructions}>{instructions}</p>
      {/* @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
      <div className={css.buttons}>
        {/* @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
        <AddToFavoritesBtn onToggleFavorites={onToggleFavorites} recipeData={recipeData} isFavorite={isFavorite} />
        {/* @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
        <GiveARatingBtn />
      </div>
      
        
      </div>

      

  );
}

