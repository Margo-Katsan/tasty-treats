import { SearchForm } from "../SearchForm/SearchForm";
import css from "./SearchSection.module.css";

export const SearchSection = () => {
  return (
    <section className={css.section}>
      <div className={css.container}>
        <SearchForm />
      </div>
    </section>
  )
}