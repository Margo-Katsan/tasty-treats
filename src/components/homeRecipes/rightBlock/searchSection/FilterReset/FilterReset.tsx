// @ts-expect-error TS(2307): Cannot find module 'images/sprite.svg' or its corr... Remove this comment to see the full error message
import svg from 'images/sprite.svg'
// @ts-expect-error TS(2307): Cannot find module './FilterReset.module.css' or i... Remove this comment to see the full error message
import css from './FilterReset.module.css';
export const FilterReset = () => {
  return (
    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <button className={css.btn} type="reset">
      {/* @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
      <svg width='16' height='16'>
        {/* @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
        <use href={`${svg}#search-close`}></use>
      </svg>
      {/* @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
      <span>Reset the filter</span>
    </button>
  )
}