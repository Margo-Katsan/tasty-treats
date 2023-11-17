import { createPortal } from 'react-dom';
// @ts-expect-error TS(2307): Cannot find module 'images/sprite.svg' or its corr... Remove this comment to see the full error message
import svg from 'images/sprite.svg'
// @ts-expect-error TS(2307): Cannot find module './Modal.module.css' or its cor... Remove this comment to see the full error message
import css from './Modal.module.css'
import { useEffect } from 'react';

const modalRoot = document.querySelector('#modal-root')

export const Modal = ({
  onClose,
  overlayClass = `${css.overlay}`,
  modalClass = '',
  children
}: any) => {
  useEffect(() => {
  const handleKeyDown = (e: any) => {
    if (e.code === 'Escape') {
      onClose();
    }
  };

  window.addEventListener('keydown', handleKeyDown);

  return () => {
    window.removeEventListener('keydown', handleKeyDown);
  };
  }, [onClose]);
  
  const handleBackdropClick = (e: any) => {
    if (e.currentTarget === e.target) {
      onClose();
    }
   
 }
  return createPortal(
    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <div className={`${css.overlay} ${overlayClass}`} onClick={handleBackdropClick}>
      {/* @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
      <div className={`${css.modal} ${modalClass}`}>
// @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
<button className={css.close} type="button" onClick={onClose}>
        {/* @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
        <svg className={css.icon}>
          {/* @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
          <use href={`${svg}#modal-close`}></use>
        </svg>
      </button>
      {children}
      </div>
    {/* @ts-expect-error TS(2345): Argument of type 'Element | null' is not assignabl... Remove this comment to see the full error message */}
    </div>, modalRoot)
}