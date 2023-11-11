import _ from 'lodash';
import { useExistingSearchParams } from "hooks/useExistingSearchParams";
import { LabelName } from "../LabelName/LabelName";
import svg from "images/sprite.svg";
import css from "./TitleLabel.module.css"

export const TitleLabel = () => {

  const { updatingSearchParams } = useExistingSearchParams();
  const handleInputText = _.debounce(
    e => {
      e.preventDefault();
      updatingSearchParams('title', e.target.value)
    },
    300,
    { leading: false, trailing: true }
  )
  
  return (
    <label className={css.label}>
      <LabelName name={"Search"} />
      <span className={css.wrapper}>
        <svg className={css.icon} width="18px" height="18px">
        <use href={`${svg}#search`}></use>
      </svg>
      <input
        type="text"
          id="search-key"
          className={css.input}
          name="search-key"
          placeholder="Enter text"
          onInput={handleInputText}
      />
      </span>
    </label>
  )
} 