import { NavLink } from "react-router-dom";
import { Transition } from 'react-transition-group';
// @ts-expect-error TS(2307): Cannot find module 'components/sharedHeader/ThemeS... Remove this comment to see the full error message
import { ThemeSwitcher } from "components/sharedHeader/ThemeSwitcher/ThemeSwitcher";
// @ts-expect-error TS(2307): Cannot find module 'images/sprite.svg' or its corr... Remove this comment to see the full error message
import svg from "images/sprite.svg"
// @ts-expect-error TS(2307): Cannot find module './MobileMenu.module.css' or it... Remove this comment to see the full error message
import css from "./MobileMenu.module.css"

export const MobileMenu = ({
  isOpen,
  onClose
}: any) => {

  return (
    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <Transition in={isOpen} timeout={300}>
      {(state) => (
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <div className={`${css.modal} modal-${state}`}>
          {/* @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
          <button className={css.btn} type="button" onClick={onClose}>
            {/* @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
            <svg className={css.icon} width="32" height="32">
              {/* @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
              <use href={`${svg}#modal-close`}></use>
            </svg>
          </button>
          {/* @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
          <div className={css.content} >
            {/* @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
            <nav className={css.nav}>
              {/* @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
              <ul className={css.list}>
                {/* @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
                <li className={css.item}>
                  {/* @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
                  <NavLink to="/" className={css.link}>Home</NavLink>
                </li>
                {/* @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
                <li class="nav-item">
                  {/* @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
                  <NavLink to="/favorites" className={css.link}>Favorites</NavLink>
                </li>
              </ul>
            </nav>
            {/* @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
            <ThemeSwitcher mobileThemeSwitcher={'mobileThemeSwitcher'} />
          </div>
        </div>
      )}
    </Transition>
    
    
      
    )
}