import { useState } from "react";
import svg from "images/sprite.svg";
import { MobileMenu } from "components/modals/MobileMenu/MobileMenu";
import css from "./BurgerMenu.module.css"

export const BurgerMenu = () => {

  const [isOpen, setIsOpen] = useState(false)

  const onClose = () => setIsOpen(false);


  return (
    <>
      <button className={css.burgerMenu} type="button" onClick={() => setIsOpen(true)}>
        <svg width="32" height="32">
          <use href={`${svg}#menu-burger`}></use>
        </svg>
      </button>
      <MobileMenu isOpen={isOpen} onClose={onClose} />
    </>
  );
};