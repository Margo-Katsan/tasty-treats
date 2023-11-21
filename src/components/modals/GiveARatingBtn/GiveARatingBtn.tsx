import { Modal } from 'components/modals/Modal/Modal'
import { ModalGiveARating } from '../ModalGiveARating/ModalGiveARating';
import { useModal } from 'hooks/useModal';
import css from "./GiveARatingBtn.module.css";

export const GiveARatingBtn = () => {

  const { showModal, openModal, closeRatingModal } = useModal();

  return (
    <>
      <button className={css.btn} onClick={openModal} type="button">Give a rating</button>
      {showModal && (
        <Modal onClose={closeRatingModal} modalClass={css.modal}>
          <ModalGiveARating handleCloseModal={closeRatingModal}/>
        </Modal>
      )}
    </>
  )
}