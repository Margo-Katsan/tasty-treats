// @ts-expect-error TS(2307): Cannot find module './FilterItem.module.css' or it... Remove this comment to see the full error message
import css from './FilterItem.module.css'
export const FilterItem = ({
  category,
  nameCategory,
  selectedCategory,
  onValueChange
}: any) => {
  return (
    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <>
      {/* @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
      <input
        id={nameCategory}
        className={`${css.input} visually-hidden`}
        type="radio"
        name="category"
        value={category}
        checked={selectedCategory === category}
        onChange={onValueChange}
      />
      {/* @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
      <label for={nameCategory}  className={css.label}>
        {/* @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
        <span className={css.title}>{nameCategory}</span>
      </label>
    </>
  )
}