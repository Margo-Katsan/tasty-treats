import { TitleLabel } from "../TitleLabel/TitleLabel";
import { TimeLabel } from "../TimeLabel/TimeLabel";
import { AreaLabel } from "../AreaLabel/AreaLabel";
import { IngredientsLabel } from "../IngredientsLabel/IngredientsLabel";
import { FilterReset } from "../FilterReset/FilterReset";
import { useExistingSearchParams } from "hooks/useExistingSearchParams";
import css from './SearchForm.module.css';

export const SearchForm = () => {

  const { updatingAllSearchParams } = useExistingSearchParams();

  return (
    <form className={css.form} onReset={() => { 
      updatingAllSearchParams();
    }}>
  
      <span className={css.container}>
        <TitleLabel  />
        <TimeLabel optionStyles={css.option} />
        <AreaLabel optionStyles={css.option}/>
        <IngredientsLabel optionStyles={css.option}/>
      </span>
      <FilterReset />
    </form>
  )
}