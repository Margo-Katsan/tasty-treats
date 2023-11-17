// @ts-expect-error TS(2307): Cannot find module 'hooks/useModal' or its corresp... Remove this comment to see the full error message
import { useModal } from "hooks/useModal";
// @ts-expect-error TS(2307): Cannot find module 'images/sprite.svg' or its corr... Remove this comment to see the full error message
import svg from "images/sprite.svg";
// @ts-expect-error TS(2307): Cannot find module 'components/modals/MobileMenu/M... Remove this comment to see the full error message
import { MobileMenu } from "components/modals/MobileMenu/MobileMenu";
// @ts-expect-error TS(2307): Cannot find module './BurgerMenu.module.css' or it... Remove this comment to see the full error message
import css from "./BurgerMenu.module.css"

export const BurgerMenu = () => {
  const { showModal, openModal, closeModal } = useModal();

  return (
    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <>
      {/* @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
      <button className={css.burgerMenu} type="button" onClick={openModal}>
        {/* @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
        <svg width="32" height="32">
          {/* @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
          <use href={`${svg}#menu-burger`}></use>
        </svg>
      </button>
      {/* @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
      <MobileMenu isOpen={showModal} onClose={closeModal} />
    </>
  );
};