import styles from "./Loader.module.css"
import { InfinitySpin } from "react-loader-spinner"

const Loader = () => {
  return (
    <div className={styles.loader}>
      <InfinitySpin
        visible={true}
        width='200'
        color='rgb(85, 27, 160)'
        ariaLabel='infinity-spin-loading'
      />
    </div>
  )
}

export default Loader
