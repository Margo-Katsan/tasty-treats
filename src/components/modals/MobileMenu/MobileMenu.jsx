import { NavLink } from "react-router-dom";
import { Transition } from 'react-transition-group';
import { ThemeSwitcher } from "components/sharedHeader/ThemeSwitcher/ThemeSwitcher";
import svg from "images/sprite.svg"
import css from "./MobileMenu.module.css"

export const MobileMenu = ({isOpen, onClose}) => {

  return (
    <Transition in={isOpen} timeout={300}>
      {(state) => (
        <div className={`${css.modal} modal-${state}`}>
          <button className={css.btn} type="button" onClick={onClose}>
            <svg className={css.icon} width="32" height="32">
              <use href={`${svg}#modal-close`}></use>
            </svg>
          </button>
          <div className={css.content} >
            <nav className={css.nav}>
              <ul className={css.list}>
                <li className={css.item}>
                  <NavLink to="/" className={css.link}>Home</NavLink>
                </li>
                <li class="nav-item">
                  <NavLink to="/favorites" className={css.link}>Favorites</NavLink>
                </li>
              </ul>
            </nav>
            <ThemeSwitcher mobileThemeSwitcher={'mobileThemeSwitcher'} />
          </div>
        </div>
      )}
    </Transition>
    
    
      
    )
}