// @ts-expect-error TS(6142): Module '../SearchForm/SearchForm' was resolved to ... Remove this comment to see the full error message
import { SearchForm } from "../SearchForm/SearchForm";
// @ts-expect-error TS(2307): Cannot find module './SearchSection.module.css' or... Remove this comment to see the full error message
import css from "./SearchSection.module.css";

export const SearchSection = () => {
  return (
    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <section className={css.section}>
      {/* @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
      <div className={css.container}>
        {/* @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
        <SearchForm />
      </div>
    </section>
  )
}