// @ts-expect-error TS(2307): Cannot find module 'components/modals/OrderNow/Ord... Remove this comment to see the full error message
import { OrderNow } from 'components/modals/OrderNow/OrderNow';
// @ts-expect-error TS(2307): Cannot find module 'components/modals/Modal/Modal'... Remove this comment to see the full error message
import { Modal } from 'components/modals/Modal/Modal'
// @ts-expect-error TS(2307): Cannot find module 'hooks/useModal' or its corresp... Remove this comment to see the full error message
import { useModal } from 'hooks/useModal';
// @ts-expect-error TS(2307): Cannot find module './Button.module.css' or its co... Remove this comment to see the full error message
import css from './Button.module.css';

export const Button = () => {
  const { showModal, openModal, closeModal } = useModal();
  return (
    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <>
      {/* @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
      <button onClick={openModal} className={css.btn}>Order now</button>
      {showModal && (
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <Modal onClose={closeModal} modalClass = {css.orderNowModal}>
        {/* @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
        <OrderNow />
      </Modal>
      )}
      
    </>
  )
}