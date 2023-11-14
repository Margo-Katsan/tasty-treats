import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import { HiChevronDown, HiChevronUp } from 'react-icons/hi';
import { useResetFilter } from 'hooks/useResetFilter';
import svg from 'images/sprite.svg'
import css from "./Select.module.css"


export const Select = ({ options, placeholder, onSelect, onReset, filterToReset }) => {
  const { selectedOption, isSelect, handleResetSelectedOption, handleChangeSelectedOption } = useResetFilter(placeholder);
  
  const handleReset = () => {
    onReset(filterToReset);
    handleResetSelectedOption({value: '', label: placeholder})
  }

  return (
    <div className={css.container}>
      <Dropdown
        options={options}
        placeholder={placeholder}
        value={selectedOption}
        className={css.wrapper}
        controlClassName={css.control}
        placeholderClassName={css.placeholder}
        menuClassName={css.menu}
        
        onChange={evt => { onSelect(evt); handleChangeSelectedOption(evt) }}
        
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

      {isSelect && (
        <span className={css.close}>
          <svg width='16' height='16' fill='rgba(5, 5, 5, 0.5)' onClick={handleReset}>
            <use href={`${svg}#search-close`}></use>
          </svg>
        </span>
      )}
    </div>
  )
}