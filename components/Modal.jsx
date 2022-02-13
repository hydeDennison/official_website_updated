import {
  Modal__backdrop,
  Modal__content,
  Modal__content__wrapper,
} from '../styles/modal/Modal.style';
import { AnimatePresence } from 'framer-motion';
const Modal = ({ open, children }) => {
  return (
    <AnimatePresence>
      {open && (
        <Modal__backdrop
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          exit={{
            opacity: 0,
          }}
        >
          <Modal__content__wrapper>
            <Modal__content>{children}</Modal__content>
          </Modal__content__wrapper>
        </Modal__backdrop>
      )}
    </AnimatePresence>
  );
};

export default Modal;
