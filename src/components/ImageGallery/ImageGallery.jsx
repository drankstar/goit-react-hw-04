import ImageCard from "../ImageCard/ImageCard"
import styles from "./ImageGallery.module.css"

export const ImageGallery = ({ items }) => {
  return (
    <ul className={styles.listItems}>
      {items.map((item) => (
        <li className={styles.item} key={item.id}>
          <ImageCard item={item} />
        </li>
      ))}
    </ul>
  )
}
