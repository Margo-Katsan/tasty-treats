import { useModal } from 'hooks/useModal';
import { Modal } from 'components/modals/Modal/Modal'
import { ModalGiveARating } from '../ModalGiveARating/ModalGiveARating';
import css from "./GiveARatingBtn.module.css";

export const GiveARatingBtn = () => {
  const { showModal, openModal, closeRatingModal } = useModal();
  return (
    <>
      <button className={css.btn} onClick={openModal} type="button">Give a rating</button>
    <Modal showModal={showModal} onClose={closeRatingModal} modalClass = {css.modal}>
        <ModalGiveARating />
      </Modal>
    </>
    
  )
}