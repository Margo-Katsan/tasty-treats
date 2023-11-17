// @ts-expect-error TS(2307): Cannot find module './PopularRecipeItem.module.css... Remove this comment to see the full error message
import css from './PopularRecipeItem.module.css';

export const PopularRecipeItem = ({
  recipeData,
  onOpen
}: any) => {
  const { _id, preview, description, title } = recipeData;
  return (
    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <li key={_id} className={css.item} onClick={() => onOpen(_id)}>
      {/* @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
      <img src={preview} alt={title} width="64" height="64" className={css.img} />
      {/* @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
      <div className={css.info}>
        {/* @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
        <h4 className={css.title}>{title}</h4>
        {/* @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
        <p className={css.desc}>{description}</p>
      </div>
    </li>
  )
}