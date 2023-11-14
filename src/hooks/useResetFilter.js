import { useState } from 'react';

export const useResetFilter = (placeholder) => {
  const [selectedOption, setSelectedOption] = useState({value: '', label: placeholder});
  const [isSelect, setIsSelect] = useState(false);

  const handleResetSelectedOption = (defaultOption) => {
    setIsSelect(false);

    setSelectedOption(defaultOption)
  }
  const handleChangeSelectedOption = evt => {
    setIsSelect(true);
    setSelectedOption(evt.value)
  }
  return {selectedOption, isSelect, handleResetSelectedOption, handleChangeSelectedOption}
}