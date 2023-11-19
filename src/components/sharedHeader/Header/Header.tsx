import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { FiShoppingCart } from "react-icons/fi";
import { useWindowSize } from "@uidotdev/usehooks";
import { NavHeader } from "components/sharedHeader/NavHeader/NavHeader";
import { ThemeSwitcher } from "components/sharedHeader/ThemeSwitcher/ThemeSwitcher";
import { BurgerMenu } from "../BurgerMenu/BurgerMenu";
import { OrderNow } from 'components/modals/OrderNow/OrderNow';
import { Modal } from 'components/modals/Modal/Modal'
import { useModal } from "hooks/useModal";
import css from "./Header.module.css";

export const Header = () => {
  const { header, container, logo, actions, cartBtn } = css;
  const windowWidth: number = useWindowSize()?.width ?? 0;

  const [isMobile, setIsMobile] = useState<boolean>(windowWidth < 767 ? true : false);
  const { showModal, openModal, closeModal } = useModal();
  useEffect(() => {

    if (windowWidth < 767) {
      setIsMobile(true)
    }
    else {
      setIsMobile(false)
    }
  }, [windowWidth])
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
          
          <BurgerMenu />
        </div>
      </div>
      {showModal && (
        <Modal onClose={closeModal} modalClass = {css.orderNowModal}>
        <OrderNow />
      </Modal>
      )}
    </header>
  )
}