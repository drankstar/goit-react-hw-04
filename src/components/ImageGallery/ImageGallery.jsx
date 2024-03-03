import ImageCard from "../ImageCard/ImageCard"
import styles from "./ImageGallery.module.css"

const ImageGallery = ({ onOpen, items }) => {
  return (
    <ul className={styles.listItems}>
      {items.map((item) => (
        <li className={styles.item} key={item.id}>
          <ImageCard onOpen={onOpen} item={item} />
        </li>
      ))}
    </ul>
  )
}

export default ImageGallery
