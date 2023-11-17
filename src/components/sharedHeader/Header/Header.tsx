import { NavLink } from "react-router-dom";
import { FiShoppingCart } from "react-icons/fi";
import { useWindowSize } from "@uidotdev/usehooks";
// @ts-expect-error TS(2307): Cannot find module 'components/sharedHeader/NavHea... Remove this comment to see the full error message
import { NavHeader } from "components/sharedHeader/NavHeader/NavHeader";
// @ts-expect-error TS(2307): Cannot find module 'components/sharedHeader/ThemeS... Remove this comment to see the full error message
import { ThemeSwitcher } from "components/sharedHeader/ThemeSwitcher/ThemeSwitcher";
// @ts-expect-error TS(6142): Module '../BurgerMenu/BurgerMenu' was resolved to ... Remove this comment to see the full error message
import { BurgerMenu } from "../BurgerMenu/BurgerMenu";
// @ts-expect-error TS(2307): Cannot find module 'components/modals/OrderNow/Ord... Remove this comment to see the full error message
import { OrderNow } from 'components/modals/OrderNow/OrderNow';
// @ts-expect-error TS(2307): Cannot find module 'components/modals/Modal/Modal'... Remove this comment to see the full error message
import { Modal } from 'components/modals/Modal/Modal'
// @ts-expect-error TS(2307): Cannot find module 'hooks/useModal' or its corresp... Remove this comment to see the full error message
import { useModal } from "hooks/useModal";
// @ts-expect-error TS(2307): Cannot find module './Header.module.css' or its co... Remove this comment to see the full error message
import css from "./Header.module.css";
import { useEffect, useState } from "react";

export const Header = () => {
  const { header, container, logo, actions, cartBtn } = css;
  const windowWidth = useWindowSize().width;
  // @ts-expect-error TS(2531): Object is possibly 'null'.
  const [isMobile, setIsMobile] = useState(windowWidth < 767 ? true : false);
  const { showModal, openModal, closeModal } = useModal();
  useEffect(() => {
    // @ts-expect-error TS(2531): Object is possibly 'null'.
    if (windowWidth < 767) {
      setIsMobile(true)
    }
    else {
      setIsMobile(false)
    }
  }, [windowWidth])
  return (
    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <header className={header}>
      {/* @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
      <div className={`${ container } container`}>
        {/* @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
        <NavHeader />
        {/* @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
        <NavLink className={logo} to="/"><span>tasty</span>treats.</NavLink>
        {/* @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
        <div className={actions}>
          {/* @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
          <button type="button" className={cartBtn} onClick={openModal}>
            {/* @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
            < FiShoppingCart size={24} className={css.cart} />
          </button>
          {!isMobile && (
            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <ThemeSwitcher />
          )} 
          
          {/* @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
          <BurgerMenu />
        </div>
      </div>
      {showModal && (
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <Modal onClose={closeModal} modalClass = {css.orderNowModal}>
        {/* @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
        <OrderNow />
      </Modal>
      )}
    </header>
  )
}