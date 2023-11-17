import { useEffect, useState } from "react";
// @ts-expect-error TS(2307): Cannot find module 'hooks/useExistingSearchParams'... Remove this comment to see the full error message
import { useExistingSearchParams } from "hooks/useExistingSearchParams";
// @ts-expect-error TS(2307): Cannot find module 'api' or its corresponding type... Remove this comment to see the full error message
import { fetchIngredients } from "api";
// @ts-expect-error TS(6142): Module '../Select/Select' was resolved to 'C:/User... Remove this comment to see the full error message
import { Select } from "../Select/Select";
// @ts-expect-error TS(6142): Module '../LabelName/LabelName' was resolved to 'C... Remove this comment to see the full error message
import { LabelName } from "../LabelName/LabelName";
// @ts-expect-error TS(2307): Cannot find module './IngredientsLabel.module.css'... Remove this comment to see the full error message
import css from "./IngredientsLabel.module.css"

export const IngredientsLabel = ({
  onReset,
  optionStyles
}: any) => {
  const { updatingSearchParams } = useExistingSearchParams();
  const [ingredients, setIngredients] = useState([]);

  useEffect(() => {
    async function fetchingIngredients() {
      const fetchedIngredients = await fetchIngredients();
      const options = fetchedIngredients.map((ingredient: any) => {
        return { value: ingredient._id, label: ingredient.name, className: optionStyles }})
      setIngredients(options);
    }
    fetchingIngredients();
  }, [optionStyles])

  const handleSelectedOption = (evt: any) => {
    updatingSearchParams('ingredient', evt.value)
  }


  return (
    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <label className={css.label}>
      {/* @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
      <LabelName name={"Ingredients"} />
      {/* @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
      <Select
        options={ingredients}
        placeholder="Product"
        onSelect={handleSelectedOption}
        onReset={onReset}
        filterToReset="ingredient"
      />
    </label>
  )
}