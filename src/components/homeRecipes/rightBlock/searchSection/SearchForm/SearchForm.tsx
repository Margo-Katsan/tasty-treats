import { useExistingSearchParams } from "hooks/useExistingSearchParams";
import { TitleLabel } from "../TitleLabel/TitleLabel";
import { TimeLabel } from "../TimeLabel/TimeLabel";
import { AreaLabel } from "../AreaLabel/AreaLabel";
import { IngredientsLabel } from "../IngredientsLabel/IngredientsLabel";
import { FilterReset } from "../FilterReset/FilterReset";
import css from './SearchForm.module.css';

export const SearchForm = () => {
  const { updatingSearchParams, updatingAllSearchParams } = useExistingSearchParams();

  
  
  const handleReset = (filterToReset) => {
    updatingSearchParams(`${filterToReset}`, '')
  }


  return (
    <form className={css.form} onReset={() => { 
      updatingAllSearchParams();
      

    }}>
      <span className={css.container}>
        <TitleLabel  />
        <TimeLabel onReset={handleReset} optionStyles={css.option} />
        <AreaLabel onReset={handleReset} optionStyles={css.option}/>
        <IngredientsLabel onReset={handleReset} optionStyles={css.option}/>
      </span>
      <FilterReset onReset={handleReset} />
    </form>
  )
}