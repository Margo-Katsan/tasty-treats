import { useState, useEffect } from "react";
import { useSearchParams } from 'react-router-dom';
// @ts-expect-error TS(2307): Cannot find module 'hooks/useExistingSearchParams'... Remove this comment to see the full error message
import { useExistingSearchParams } from "hooks/useExistingSearchParams";
// @ts-expect-error TS(6142): Module '../CategoryItem/CategoryItem' was resolved... Remove this comment to see the full error message
import { Category } from "../CategoryItem/CategoryItem";
// @ts-expect-error TS(2307): Cannot find module 'api' or its corresponding type... Remove this comment to see the full error message
import { fetchCategories } from "api";
// @ts-expect-error TS(2307): Cannot find module './Categories.module.css' or it... Remove this comment to see the full error message
import css from "./Categories.module.css"

export const Categories = () => {
  const [categories, setCategories] = useState([]);
  const [searchParams] = useSearchParams();
  const selectedCategory = searchParams.get('category') ?? '';
  const { updatingSearchParams } = useExistingSearchParams();

  const handleCategoryChange = (category: any) => {
    updatingSearchParams('category', category)
  }

  useEffect(() => {
    async function fetchingCategories() {
      try {
        const fetchedCategories = await fetchCategories();
        setCategories(fetchedCategories);
      }
      catch (error) {
        console.log(error);
      }
    }
    fetchingCategories();

  }, [])

  return (
    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <section>
      {/* @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
      <button
        type="button"
        className={`${css.btn} ${selectedCategory === '' ? css.selected : ''}`}
        onClick={() => { handleCategoryChange('') }}
      >
        All resipes
      </button>
      {/* @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
      <ul className={css.list}>
        {/* @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
        {categories.map(category => <Category category={category} onChangeCategory={handleCategoryChange} selectedCategory={selectedCategory} />)}
      </ul>
    </section>
  )
}