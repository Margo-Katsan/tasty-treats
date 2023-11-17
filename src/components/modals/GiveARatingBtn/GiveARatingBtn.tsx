// @ts-expect-error TS(2307): Cannot find module 'hooks/useModal' or its corresp... Remove this comment to see the full error message
import { useModal } from 'hooks/useModal';
// @ts-expect-error TS(2307): Cannot find module 'components/modals/Modal/Modal'... Remove this comment to see the full error message
import { Modal } from 'components/modals/Modal/Modal'
// @ts-expect-error TS(6142): Module '../ModalGiveARating/ModalGiveARating' was ... Remove this comment to see the full error message
import { ModalGiveARating } from '../ModalGiveARating/ModalGiveARating';
// @ts-expect-error TS(2307): Cannot find module './GiveARatingBtn.module.css' o... Remove this comment to see the full error message
import css from "./GiveARatingBtn.module.css";

export const GiveARatingBtn = () => {
  const { showModal, openModal, closeRatingModal } = useModal();
  return (
    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <>
      {/* @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
      <button className={css.btn} onClick={openModal} type="button">Give a rating</button>
      {showModal && (
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <Modal onClose={closeRatingModal} modalClass = {css.modal}>
        {/* @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
        <ModalGiveARating />
      </Modal>
      )}
    
    </>
    
  )
}