import { NavLink } from "react-router-dom";
// @ts-expect-error TS(2307): Cannot find module './NavHeader.module.css' or its... Remove this comment to see the full error message
import css from "./NavHeader.module.css";


export const NavHeader = () => {
  return (
    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <nav className={css.nav}>
      {/* @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
      <ul className={css.navList}>
        {/* @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
        <li className={css.navItem}>
          {/* @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
          <NavLink to="/" className={css.link}>Home</NavLink>
        </li>
        {/* @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
        <li className={css.navItem}>
          {/* @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
          <NavLink to="/favorites" className={css.link}>Favorites</NavLink>
        </li>
      </ul>
    </nav>
  )
}