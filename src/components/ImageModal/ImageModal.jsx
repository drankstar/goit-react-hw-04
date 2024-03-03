import styles from "./ImageModal.module.css"
const ImageModal = ({ image }) => {
  console.log("image", image)
  return (
    <div>
      <img className={styles.image} src={image.urls.regular} alt='' />
    </div>
  )
}

export default ImageModal
