import { useExistingSearchParams } from "hooks/useExistingSearchParams";
import { TitleLabel } from "../TitleLabel/TitleLabel";
import { TimeLabel } from "../TimeLabel/TimeLabel";
import { AreaLabel } from "../AreaLabel/AreaLabel";
import { IngredientsLabel } from "../IngredientsLabel/IngredientsLabel";
import { FilterReset } from "../FilterReset/FilterReset";
import css from './SearchForm.module.css';

export const SearchForm = () => {
  const { updatingSearchParams } = useExistingSearchParams();

  const handleReset = filterToReset => {
    updatingSearchParams(`${filterToReset}`, '')
  }

  return (
    <form className={css.form} onReset={() => { 
      handleReset('time');
      handleReset('title');
      handleReset('area');
      handleReset('ingredient');
    }}>
      <span className={css.container}>
        <TitleLabel  />
        <TimeLabel onReset={handleReset}/>
        <AreaLabel onReset={handleReset} />
        <IngredientsLabel onReset={handleReset} />
      </span>
      <FilterReset />
    </form>
  )
}