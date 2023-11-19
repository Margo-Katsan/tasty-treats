import { OrderNow } from 'components/modals/OrderNow/OrderNow';
import { Modal } from 'components/modals/Modal/Modal'
import { useModal } from 'hooks/useModal';
import css from './Button.module.css';

export const Button = () => {
  const { showModal, openModal, closeModal } = useModal();
  return (
    <>
      <button onClick={openModal} className={css.btn}>Order now</button>
      {showModal && (
        <Modal onClose={closeModal} modalClass = {css.orderNowModal}>
          <OrderNow />
        </Modal>
      )}
      
    </>
  )
}