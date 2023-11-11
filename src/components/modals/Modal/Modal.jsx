import ReactModal from 'react-modal';
import svg from 'images/sprite.svg'
import css from './Modal.module.css'

export const Modal = ({ showModal, onClose, overlayClass = `${css.overlay}`, modalClass = '', children }) => {

  return (
    <ReactModal 
      isOpen={showModal}
      overlayClassName={`${css.overlay} ${overlayClass}`}
      shouldCloseOnOverlayClick={true}
      className={`${css.modal} ${modalClass}`}
    >
      <button className={css.close} type="button" onClick={onClose}>
        <svg className={css.icon}>
          <use href={`${svg}#modal-close`}></use>
        </svg>
      </button>
      {children}
      
    </ReactModal>
  )

}