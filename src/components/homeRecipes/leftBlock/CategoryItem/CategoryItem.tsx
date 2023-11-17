// @ts-expect-error TS(2307): Cannot find module './CategoryItem.module.css' or ... Remove this comment to see the full error message
import css from "./CategoryItem.module.css";

export const Category = ({
  category,
  onChangeCategory,
  selectedCategory
}: any) => {
  return (
    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <li key={category._id} className={css.item}>
      {/* @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
      <button className={`${css.btn} ${selectedCategory === category.name ? css.selected : ''}`} type="button" onClick={() => {onChangeCategory(category.name)}}>
        {category.name}
      </button>
    </li>
  )
}