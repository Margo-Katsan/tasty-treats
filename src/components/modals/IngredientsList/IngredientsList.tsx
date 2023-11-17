import css from './IngredientsList.module.css';

export const IngredientsList = ({ ingredients }) => {
  return (
    <ul className={css.list}>
      {ingredients.map(ingredient =>
        <li key={ingredient._id} className={css.item}>
          <p className={css.name}>{ingredient.name}</p>
          <span className={css.measure}>{ingredient.measure}</span>
        </li>)}
    </ul>
  )
}