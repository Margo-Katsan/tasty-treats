// @ts-expect-error TS(2307): Cannot find module 'hooks/useExistingSearchParams'... Remove this comment to see the full error message
import { useExistingSearchParams } from "hooks/useExistingSearchParams";
// @ts-expect-error TS(6142): Module '../TitleLabel/TitleLabel' was resolved to ... Remove this comment to see the full error message
import { TitleLabel } from "../TitleLabel/TitleLabel";
// @ts-expect-error TS(6142): Module '../TimeLabel/TimeLabel' was resolved to 'C... Remove this comment to see the full error message
import { TimeLabel } from "../TimeLabel/TimeLabel";
// @ts-expect-error TS(6142): Module '../AreaLabel/AreaLabel' was resolved to 'C... Remove this comment to see the full error message
import { AreaLabel } from "../AreaLabel/AreaLabel";
// @ts-expect-error TS(6142): Module '../IngredientsLabel/IngredientsLabel' was ... Remove this comment to see the full error message
import { IngredientsLabel } from "../IngredientsLabel/IngredientsLabel";
// @ts-expect-error TS(6142): Module '../FilterReset/FilterReset' was resolved t... Remove this comment to see the full error message
import { FilterReset } from "../FilterReset/FilterReset";
// @ts-expect-error TS(2307): Cannot find module './SearchForm.module.css' or it... Remove this comment to see the full error message
import css from './SearchForm.module.css';

export const SearchForm = () => {
  const { updatingSearchParams, updatingAllSearchParams } = useExistingSearchParams();

  
  
  const handleReset = (filterToReset: any) => {
    updatingSearchParams(`${filterToReset}`, '')
  }


  return (
    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <form className={css.form} onReset={() => { 
      updatingAllSearchParams();
      

    }}>
      {/* @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
      <span className={css.container}>
        {/* @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
        <TitleLabel  />
        {/* @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
        <TimeLabel onReset={handleReset} optionStyles={css.option} />
        {/* @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
        <AreaLabel onReset={handleReset} optionStyles={css.option}/>
        {/* @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
        <IngredientsLabel onReset={handleReset} optionStyles={css.option}/>
      </span>
      {/* @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
      <FilterReset onReset={handleReset} />
    </form>
  )
}