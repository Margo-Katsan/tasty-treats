import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import { HiChevronDown, HiChevronUp } from 'react-icons/hi';
import svg from 'images/sprite.svg'
import css from "./Select.module.css"
import { useState } from 'react';

export const Select = ({ options, placeholder, onSelect, onReset, defaultOption, filterToReset }) => {
  const [selectedOption, setSelectedOption] = useState({value: '', label: placeholder});
  const [isSelect, setIsSelect] = useState(false);
  
  const handleReset = () => {
    setIsSelect(false);
    onReset(filterToReset);
    setSelectedOption(defaultOption)
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
        
        onChange={evt => { onSelect(evt); setIsSelect(true); console.log('select'); setSelectedOption(evt.value) }}
        
        arrowClosed={
          <span className="arrow-open">
            <HiChevronDown size={18} color={"rgba(5, 5, 5, 0.5)"} />
          </span>
        }
        arrowOpen={
          <span className="arrow-open">
            <HiChevronUp size={18} color={"rgba(5, 5, 5, 0.5)"}/>
          </span>
        }
      
      />

      {isSelect && (
        <span className={css.close}>
          <svg width='16' height='16' fill='rgba(5, 5, 5, 0.5)' onClick={handleReset}>
            <use href={`${svg}#icon-search-close`}></use>
          </svg>
        </span>
      )}
    </div>
  )
}