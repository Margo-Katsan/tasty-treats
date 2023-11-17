import svg from "images/sprite.svg";
import css from "./IconArrow.module.css"
export const IconArrow = ({ iconId, fill }) => {
  return (
    <svg className={css.icon} width="20" height="20" fill={fill}>
    <use href={`${svg}#${iconId}`}></use>
  </svg>
  )
  
}