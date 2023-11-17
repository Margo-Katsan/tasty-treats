// @ts-expect-error TS(2307): Cannot find module 'images/sprite.svg' or its corr... Remove this comment to see the full error message
import svg from "images/sprite.svg";
// @ts-expect-error TS(2307): Cannot find module './IconArrow.module.css' or its... Remove this comment to see the full error message
import css from "./IconArrow.module.css"
export const IconArrow = ({
  iconId,
  fill
}: any) => {
  return (
    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <svg className={css.icon} width="20" height="20" fill={fill}>
    {/* @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
    <use href={`${svg}#${iconId}`}></use>
  </svg>
  )
  
}