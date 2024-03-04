import Modal from "react-modal"
import styles from "./ImageModal.module.css"

Modal.setAppElement("#root")

const ImageModal = ({ closeModal, isOpen, image }) => {
  return (
    <Modal className={styles.modal} isOpen={isOpen} onRequestClose={closeModal}>
      <img
        className={styles.image}
        src={image.urls.regular}
        alt={image.alt_description}
      />
    </Modal>
  )
}

export default ImageModal
