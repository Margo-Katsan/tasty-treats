

import { NavLink } from "react-router-dom";

import { ThemeSwitcher } from "components/sharedHeader/ThemeSwitcher/ThemeSwitcher";
import css from "./MobileMenu.module.css"

import { Transition } from 'react-transition-group';


export const MobileMenu = ({isOpen, onClose}) => {

  return (
    <Transition in={isOpen} timeout={300}>
      {(state) => (
        <div className={`modal modal-${state}`}>
          <button onClick={onClose}></button>
          <div className={css.content} >
            <nav className={css.nav}>
              <ul class="nav-list">
                <li class="nav-item">
                  <NavLink to="/" className={css.link}>Home</NavLink>
                </li>
                <li class="nav-item">
                  <NavLink to="/favorites" className={css.link}>Favorites</NavLink>
                </li>
              </ul>
            </nav>
            <ThemeSwitcher />
          </div>
        </div>
      )}
    </Transition>
    
    
      
    )
}