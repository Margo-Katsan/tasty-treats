import { useState, useEffect } from "react";
import { useSearchParams } from 'react-router-dom';
import { useExistingSearchParams } from "hooks/useExistingSearchParams";
import { Category } from "../CategoryItem/CategoryItem";
import { fetchCategories } from "api";
import css from "./Categories.module.css"

export const Categories = () => {
  const [categories, setCategories] = useState([]);
  const [searchParams] = useSearchParams();
  const selectedCategory = searchParams.get('category') ?? '';
  const { updatingSearchParams } = useExistingSearchParams();

  const handleCategoryChange = category => {
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
    <section>
      <button
        type="button"
        className={`${css.btn} ${selectedCategory === '' ? css.selected : ''}`}
        onClick={() => { handleCategoryChange('') }}
      >
        All resipes
      </button>
      <ul className={css.list}>
        {categories.map(category => <Category category={category} onChangeCategory={handleCategoryChange} selectedCategory={selectedCategory} />)}
      </ul>
    </section>
  )
}