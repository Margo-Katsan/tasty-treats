import { useExistingSearchParams } from 'hooks/useExistingSearchParams';
import { Select } from '../Select/Select';
import { LabelName } from '../LabelName/LabelName';
import css from './TimeLabel.module.css';

export const TimeLabel = ({onReset}) => {
  const { label, option } = css;

  const { updatingSearchParams } = useExistingSearchParams();

  const options = Array.from({ length: 24 }, (_, index) => ({
  value: `${index * 5 + 5}`,
  label: `${index * 5 + 5} min`,
  className: option,
  }));
  
  const defaultOption = { value: '', label: '0 min' };
 
  const handleSelectedOption = evt => {
    updatingSearchParams('time', evt.value)
  }
 
  return (
    <label className={label}>
      <LabelName name={"Time"} />
      <Select
        options={options}
        placeholder="0 min"
        defaultOption={defaultOption}
        onSelect={handleSelectedOption}
        onReset={onReset}
        filterToReset="time"
      />
    </label>
  )
} 