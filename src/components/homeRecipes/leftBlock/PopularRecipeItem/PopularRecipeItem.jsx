import css from './PopularRecipeItem.module.css';

export const PopularRecipeItem = ({ recipeData, onOpen }) => {
  const { _id, preview, description, title } = recipeData;
  return (
    <li key={_id} className={css.item} onClick={() => onOpen(_id)}>
      <img src={preview} alt={title} width="64" height="64" className={css.img} />
      <div className={css.info}>
        <h4 className={css.title}>{title}</h4>
        <p className={css.desc}>{description}</p>
      </div>
    </li>
  )
}