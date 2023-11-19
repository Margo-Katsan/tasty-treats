import { FC } from 'react';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import { useSearchParams } from 'react-router-dom';
import { HiChevronDown, HiChevronUp } from 'react-icons/hi';
import { IOption } from 'interface/Option';
import css from "./Select.module.css"

interface ISelectProps {
  options: IOption[];
  placeholder: string;
  onSelect: (value: string) => void;
  filterToReset: string;
}

export const Select: FC<ISelectProps> = ({ options, placeholder, onSelect, filterToReset }) => {
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
        
        onChange={option => { onSelect(option.value); }}
        
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