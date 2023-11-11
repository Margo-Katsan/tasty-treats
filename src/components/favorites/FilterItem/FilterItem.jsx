import css from './FilterItem.module.css'
export const FilterItem = ({ category, nameCategory, selectedCategory, onValueChange  }) => {
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
      <label for={nameCategory}  className={css.label}>
        <span className={css.title}>{nameCategory}</span>
      </label>
    </>
  )
}