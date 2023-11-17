import svg from "images/sprite.svg";
import css from "./NoRecipesFound.module.css"

export const NoRecipesFound = () => {
  return (
    <div className={css.container}>
      <svg className={css.icon} width="97" height="83">
  <use href={`${svg}#chefs-hat`}></use>
</svg>
      <p className={css.text}>Unfortunately, no recipes match the selected filters.</p>
    </div>
  )
}