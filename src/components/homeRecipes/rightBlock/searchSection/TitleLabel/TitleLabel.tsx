// @ts-expect-error TS(7016): Could not find a declaration file for module 'loda... Remove this comment to see the full error message
import _ from 'lodash';
import { useSearchParams } from 'react-router-dom';
// @ts-expect-error TS(2307): Cannot find module 'hooks/useExistingSearchParams'... Remove this comment to see the full error message
import { useExistingSearchParams } from "hooks/useExistingSearchParams";
// @ts-expect-error TS(6142): Module '../LabelName/LabelName' was resolved to 'C... Remove this comment to see the full error message
import { LabelName } from "../LabelName/LabelName";
// @ts-expect-error TS(2307): Cannot find module 'images/sprite.svg' or its corr... Remove this comment to see the full error message
import svg from "images/sprite.svg";
// @ts-expect-error TS(2307): Cannot find module './TitleLabel.module.css' or it... Remove this comment to see the full error message
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
    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <label className={css.label}>
      {/* @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
      <LabelName name={"Search"} />
      {/* @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
      <span className={css.wrapper}>
        
        {/* @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
        <input
          type="text"
          id="search-key"
          className={css.input}
          name="search-key"
          defaultValue={searchParams.get('title') ?? ''}
          placeholder="Enter text"
          onInput={handleInputText}
        />
        {/* @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
        <svg className={`icon ${css.icon}`} width="18px" height="18px">
          {/* @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
          <use href={`${svg}#search`}></use>
        </svg>
      </span>
    </label>
  )
} 