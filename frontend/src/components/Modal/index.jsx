import styles from "./style.module.css";

const Modal = ({ onClose, children }) => {
  return (
    <>
      <div className={styles.backdrop} onClick={onClose} />
      <dialog open className={styles.modal}>
        {children}
      </dialog>
    </>
  );
};

export default Modal;
