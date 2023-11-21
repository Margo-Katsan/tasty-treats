import { MobileMenu } from "components/modals/MobileMenu/MobileMenu";
import { useModal } from "hooks/useModal";
import svg from "images/sprite.svg";
import css from "./BurgerMenu.module.css"

export const BurgerMenu = () => {
  
  const { showModal, openModal, closeModal } = useModal();

  return (
    <>
      <button className={css.burgerMenu} type="button" onClick={openModal}>
        <svg width="32" height="32">
          <use href={`${svg}#menu-burger`}></use>
        </svg>
      </button>
      <MobileMenu isOpen={showModal} onClose={closeModal} />
    </>
  );
};