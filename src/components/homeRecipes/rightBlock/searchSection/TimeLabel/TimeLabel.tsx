import { FC } from "react";
import { useExistingSearchParams } from 'hooks/useExistingSearchParams';
import { Select } from '../Select/Select';
import { LabelName } from '../LabelName/LabelName';
import css from './TimeLabel.module.css';

interface ITimeLabel {
  optionStyles: string;
}

export const TimeLabel: FC<ITimeLabel> = ({ optionStyles }) => {

  const { updatingSearchParams } = useExistingSearchParams();

  const options = Array.from({ length: 24 }, (_, index) => ({
  value: `${index * 5 + 5}`,
  label: `${index * 5 + 5} min`,
    className: optionStyles,
  }));
 
  const handleSelectedOption = (value: string) => {
    updatingSearchParams('time', value)
  }
 
  return (
    <label className={css.label}>
      <LabelName name={"Time"} />
      <Select
        options={options}
        placeholder="0 min"
        onSelect={handleSelectedOption}
        filterToReset="time"
      />
    </label>
  )
} 