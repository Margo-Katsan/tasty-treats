// @ts-expect-error TS(7016): Could not find a declaration file for module 'loda... Remove this comment to see the full error message
import _ from 'lodash';
import { useSearchParams } from 'react-router-dom';
import { useExistingSearchParams } from "hooks/useExistingSearchParams";
import { LabelName } from "../LabelName/LabelName";
import svg from "images/sprite.svg";
import css from "./TitleLabel.module.css"

export const TitleLabel = () => {
  const [searchParams] = useSearchParams();
  const { updatingSearchParams } = useExistingSearchParams();
  const handleInputText = _.debounce(
    (e: any) => {
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
        
        <input
          type="text"
          id="search-key"
          className={css.input}
          name="search-key"
          defaultValue={searchParams.get('title') ?? ''}
          placeholder="Enter text"
          onInput={handleInputText}
        />
        <svg className={`icon ${css.icon}`} width="18px" height="18px">
          <use href={`${svg}#search`}></use>
        </svg>
      </span>
    </label>
  )
} 