import styles from "./ImageCard.module.css"

const ImageCard = ({ onOpen, item }) => {
  const handleClick = () => onOpen(item)
  return (
    <div>
      <img
        onClick={handleClick}
        className={styles.img}
        src={item.urls.small}
        alt={item.slug}
      />
    </div>
  )
}

export default ImageCard
