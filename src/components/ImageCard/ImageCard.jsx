import styles from "./ImageCard.module.css"
const ImageCard = ({ item }) => {
  return (
    <div className={styles.card}>
      <img className={styles.img} src={item.urls.small} alt={item.slug} />
    </div>
  )
}

export default ImageCard
