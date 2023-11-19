import { createPortal } from 'react-dom';
import svg from 'images/sprite.svg'
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
    <div className={`${css.overlay} ${overlayClass}`} onClick={handleBackdropClick}>
      <div className={`${css.modal} ${modalClass}`}>

<button className={css.close} type="button" onClick={onClose}>

        <svg className={css.icon}>

          <use href={`${svg}#modal-close`}></use>
        </svg>
      </button>
      {children}
      </div>
    {/* @ts-expect-error TS(2345): Argument of type 'Element | null' is not assignabl... Remove this comment to see the full error message */}
    </div>, modalRoot)
}