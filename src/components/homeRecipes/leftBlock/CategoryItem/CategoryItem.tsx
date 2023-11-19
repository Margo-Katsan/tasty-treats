import {FC} from "react"
import { ICategory } from "interface/Category";
import css from "./CategoryItem.module.css";

interface ICategoryProps {
  category: ICategory;
  onChangeCategory: (category: string) => void;
  selectedCategory: string
}

export const Category: FC<ICategoryProps> = ({ category, onChangeCategory, selectedCategory }) => {
  return (
    <li key={category._id} className={css.item}>
      <button className={`${css.btn} ${selectedCategory === category.name ? css.selected : ''}`} type="button" onClick={() => {onChangeCategory(category.name)}}>
        {category.name}
      </button>
    </li>
  )
}