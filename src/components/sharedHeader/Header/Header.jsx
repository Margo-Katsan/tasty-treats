import { NavLink } from "react-router-dom";

import { NavHeader } from "components/sharedHeader/NavHeader/NavHeader";
import { ThemeSwitcher } from "components/sharedHeader/ThemeSwitcher/ThemeSwitcher";
import { BurgerMenu } from "../BurgerMenu/BurgerMenu";
import { OrderNow } from 'components/modals/OrderNow/OrderNow';
import { Modal } from 'components/modals/Modal/Modal'
import css from "./Header.module.css";
import { useState, useEffect } from "react";
import { useModal } from "hooks/useModal";
import { FiShoppingCart} from "react-icons/fi"

export const Header = () => {
  const [isMobile, setIsMobile] = useState(false)
  const { header, container, logo, actions, cartBtn } = css;
  const { showModal, openModal, closeModal } = useModal();

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMobile(false)
      }
      else {
        setIsMobile(true);
      }
    };
    
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <header className={header}>
      <div className={`${ container } container`}>
        <NavHeader />
        <NavLink className={logo} to="/"><span>tasty</span>treats.</NavLink>
        <div className={actions}>
          <button type="button" className={cartBtn} onClick={openModal}>
            < FiShoppingCart size={24} className={css.cart} />
          </button>
          {!isMobile && (
            <ThemeSwitcher />
          )}
          {isMobile && (
            <BurgerMenu />
          )}
        </div>
      </div>
      <Modal showModal={showModal} onClose={closeModal} modalClass = {css.orderNowModal}>
        <OrderNow />
      </Modal>
    </header>
  )
}