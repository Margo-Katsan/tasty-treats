import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import { useSearchParams } from 'react-router-dom';
import { HiChevronDown, HiChevronUp } from 'react-icons/hi';
import css from "./Select.module.css"


export const Select = ({ options, placeholder, onSelect, filterToReset }) => {
  const [searchParams] = useSearchParams();

  return (
    <div className={css.container}>
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
          <span className="arrow-open">
            <HiChevronDown size={18} color={"var(--filter-text-color)"} />
          </span>
        }
        arrowOpen={
          <span className="arrow-open">
            <HiChevronUp size={18} color={"var(--filter-text-color)"}/>
          </span>
        }
      
      />

    </div>
  )
}