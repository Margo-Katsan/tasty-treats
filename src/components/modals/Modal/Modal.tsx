import {FC, MouseEvent} from "react"
import { createPortal } from 'react-dom';
import svg from 'images/sprite.svg'
import css from './Modal.module.css'
import { useEffect } from 'react';

interface IModalProps {
  onClose: () => void;
  overlayClass?: string;
  modalClass?: string;
  children: React.ReactNode;
}

const modalRoot = document.querySelector('#modal-root')

export const Modal: FC<IModalProps> = ({ onClose, overlayClass = `${css.overlay}`, modalClass = '', children }) => {

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
  
  const handleBackdropClick = (e: MouseEvent<HTMLDivElement>) => {
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
    </div>, modalRoot as Element)
}