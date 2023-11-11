import { NavLink } from "react-router-dom";
import css from "./NavHeader.module.css";


export const NavHeader = () => {
  return (
    <nav className={css.nav}>
      <ul className={css.navList}>
        <li className={css.navItem}>
          <NavLink to="/" className={css.link}>Home</NavLink>
        </li>
        <li className={css.navItem}>
          <NavLink to="/favorites" className={css.link}>Favorites</NavLink>
        </li>
      </ul>
    </nav>
  )
}