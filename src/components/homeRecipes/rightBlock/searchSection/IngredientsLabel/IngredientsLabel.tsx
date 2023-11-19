import { useEffect, useState } from "react";
import { useExistingSearchParams } from "hooks/useExistingSearchParams";
import { fetchIngredients } from "api";
import { Select } from "../Select/Select";
import { LabelName } from "../LabelName/LabelName";
import { IOption } from "interface/Option";
import css from "./IngredientsLabel.module.css"

export const IngredientsLabel = ({
  onReset,
  optionStyles
}: any) => {
  const { updatingSearchParams } = useExistingSearchParams();
  const [ingredients, setIngredients] = useState<IOption[]>([]);

  useEffect(() => {
    async function fetchingIngredients() {
      const fetchedIngredients = await fetchIngredients();
      const options = fetchedIngredients.map((ingredient) => {
        return { value: ingredient._id, label: ingredient.name, className: optionStyles }})
      setIngredients(options);
    }
    fetchingIngredients();
  }, [optionStyles])

  const handleSelectedOption = (value: string) => {
    updatingSearchParams('ingredient', value)
  }


  return (
    <label className={css.label}>
      <LabelName name={"Ingredients"} />
      <Select
        options={ingredients}
        placeholder="Product"
        onSelect={handleSelectedOption}
        filterToReset="ingredient"
      />
    </label>
  )
}