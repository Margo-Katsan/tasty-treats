import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import { useSearchParams } from 'react-router-dom';
import { HiChevronDown, HiChevronUp } from 'react-icons/hi';
// @ts-expect-error TS(2307): Cannot find module './Select.module.css' or its co... Remove this comment to see the full error message
import css from "./Select.module.css"


export const Select = ({
  options,
  placeholder,
  onSelect,
  filterToReset
}: any) => {
  const [searchParams] = useSearchParams();

  return (
    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <div className={css.container}>
      {/* @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
      <Dropdown
        options={options}
        placeholder={placeholder}
        value={searchParams.get(filterToReset) ?? ''}
        className={css.wrapper}
        controlClassName={css.control}
        placeholderClassName={css.placeholder}
        menuClassName={css.menu}
        
        onChange={evt => { onSelect(evt); }}
        
        arrowClosed={
          // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <span className="arrow-open">
            {/* @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
            <HiChevronDown size={18} color={"var(--filter-text-color)"} />
          </span>
        }
        arrowOpen={
          // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <span className="arrow-open">
            {/* @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
            <HiChevronUp size={18} color={"var(--filter-text-color)"}/>
          </span>
        }
      
      />

    </div>
  )
}