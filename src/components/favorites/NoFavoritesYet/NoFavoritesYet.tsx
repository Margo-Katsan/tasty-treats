import svg from "images/sprite.svg";
import css from "./NoFavoritesYet.module.css";

export const NoFavoritesYet = () => {
  return (
    <div className={css.container}>
      <svg className={css.icon} width="97" height="83">
        <use href={`${svg}#chefs-hat`}></use>
      </svg>
      <p className={css.text}>It appears that you haven't added any recipes to your favorites yet. To get started, you can add recipes that you like to your favorites for easier access in the future.</p>
    </div>
  )
}