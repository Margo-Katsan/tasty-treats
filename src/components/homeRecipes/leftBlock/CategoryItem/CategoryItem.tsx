import css from "./CategoryItem.module.css";

export const Category = ({ category, onChangeCategory, selectedCategory }) => {
  return (
    <li key={category._id} className={css.item}>
      <button className={`${css.btn} ${selectedCategory === category.name ? css.selected : ''}`} type="button" onClick={() => {onChangeCategory(category.name)}}>
        {category.name}
      </button>
    </li>
  )
}