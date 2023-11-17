import svg from 'images/sprite.svg'
import css from './FilterReset.module.css';
export const FilterReset = () => {
  return (
    <button className={css.btn} type="reset">
      <svg width='16' height='16'>
        <use href={`${svg}#search-close`}></use>
      </svg>
      <span>Reset the filter</span>
    </button>
  )
}