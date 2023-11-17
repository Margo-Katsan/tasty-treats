// @ts-expect-error TS(2307): Cannot find module 'hooks/useExistingSearchParams'... Remove this comment to see the full error message
import { useExistingSearchParams } from 'hooks/useExistingSearchParams';
// @ts-expect-error TS(6142): Module '../Select/Select' was resolved to 'C:/User... Remove this comment to see the full error message
import { Select } from '../Select/Select';
// @ts-expect-error TS(6142): Module '../LabelName/LabelName' was resolved to 'C... Remove this comment to see the full error message
import { LabelName } from '../LabelName/LabelName';
// @ts-expect-error TS(2307): Cannot find module './TimeLabel.module.css' or its... Remove this comment to see the full error message
import css from './TimeLabel.module.css';

export const TimeLabel = ({
  onReset,
  optionStyles
}: any) => {


  const { updatingSearchParams } = useExistingSearchParams();

  const options = Array.from({ length: 24 }, (_, index) => ({
  value: `${index * 5 + 5}`,
  label: `${index * 5 + 5} min`,
    className: optionStyles,
  }));
 
  const handleSelectedOption = (evt: any) => {
    updatingSearchParams('time', evt.value)
  }
 
  return (
    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <label className={css.label}>
      {/* @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
      <LabelName name={"Time"} />
      {/* @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
      <Select
        options={options}
        placeholder="0 min"
        onSelect={handleSelectedOption}
        onReset={onReset}
        filterToReset="time"
      />
    </label>
  )
} 