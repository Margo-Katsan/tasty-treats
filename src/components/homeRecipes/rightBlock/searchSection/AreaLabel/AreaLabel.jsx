import { useEffect, useState } from "react";
import { useExistingSearchParams } from "hooks/useExistingSearchParams";
import { Select } from "../Select/Select";
import { LabelName } from "../LabelName/LabelName";
import { fetchAreas } from "api";
import css from './AreaLabel.module.css'

export const AreaLabel = ({onReset}) => {
  const [areas, setAreas] = useState([]);
  const { updatingSearchParams } = useExistingSearchParams();
  const defaultOption = { value: '', label: 'Region' };

  useEffect(() => {
    async function fetchingAreas() {
      try {
        const fetchedAreas = await fetchAreas();
        const options = fetchedAreas.map(area =>  {return {value: area.name, label: area.name, className: `${css.option}`}});
        setAreas(options)
      } catch (error) {
        
      }
    }
    fetchingAreas();
  }, [])

  const handleSelectedOption = e => {
    updatingSearchParams('area', e.value)
  }

  return (
    
    <label className={css.label}>
      <LabelName name={"Area"} />
      <Select
        options={areas}
        placeholder="Region"
        defaultOption={defaultOption}
        onSelect={handleSelectedOption}
        onReset={onReset}
        filterToReset="area"
      />
    </label>
  )
}