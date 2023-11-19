import { FC, ChangeEvent } from 'react'
import css from './FilterItem.module.css'

interface IFilterItemProps {
  category: string;
  nameCategory: string;
  selectedCategory: string
  onValueChange: (event: ChangeEvent<HTMLInputElement>) => void
}

export const FilterItem: FC<IFilterItemProps> = ({category, nameCategory, selectedCategory, onValueChange}) => {
  return (
    <>
      <input
        id={nameCategory}
        className={`${css.input} visually-hidden`}
        type="radio"
        name="category"
        value={category}
        checked={selectedCategory === category}
        onChange={onValueChange}
      />
      <label htmlFor={nameCategory}  className={css.label}>
        <span className={css.title}>{nameCategory}</span>
      </label>
    </>
  )
}