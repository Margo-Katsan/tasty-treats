import { useEffect, useState } from "react";
// @ts-expect-error TS(2307): Cannot find module 'hooks/useExistingSearchParams'... Remove this comment to see the full error message
import { useExistingSearchParams } from "hooks/useExistingSearchParams";
// @ts-expect-error TS(6142): Module '../Select/Select' was resolved to 'C:/User... Remove this comment to see the full error message
import { Select } from "../Select/Select";
// @ts-expect-error TS(6142): Module '../LabelName/LabelName' was resolved to 'C... Remove this comment to see the full error message
import { LabelName } from "../LabelName/LabelName";
// @ts-expect-error TS(2307): Cannot find module 'api' or its corresponding type... Remove this comment to see the full error message
import { fetchAreas } from "api";
// @ts-expect-error TS(2307): Cannot find module './AreaLabel.module.css' or its... Remove this comment to see the full error message
import css from './AreaLabel.module.css'

export const AreaLabel = ({
  onReset,
  optionStyles
}: any) => {
  const [areas, setAreas] = useState([]);
  const { updatingSearchParams } = useExistingSearchParams();

  useEffect(() => {
    async function fetchingAreas() {
      try {
        const fetchedAreas = await fetchAreas();
        const options = fetchedAreas.map((area: any) => {return {value: area.name, label: area.name, className: optionStyles}});
        setAreas(options)
      } catch (error) {
        
      }
    }
    fetchingAreas();
  }, [optionStyles])

  const handleSelectedOption = (e: any) => {
    updatingSearchParams('area', e.value)
  }

  return (
    
    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <label className={css.label}>
      {/* @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
      <LabelName name={"Area"} />
      {/* @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
      <Select
        options={areas}
        placeholder="Region"
        onSelect={handleSelectedOption}
        onReset={onReset}
        filterToReset="area"
      />
    </label>
  )
}