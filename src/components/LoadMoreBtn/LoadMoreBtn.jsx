import styles from "./LoadMoreBtn.module.css"
const LoadMoreBtn = ({ click }) => {
  return (
    <div className={styles.btnContainer}>
      <button className={styles.loadMoreBtn} onClick={click}>
        Load more
      </button>
    </div>
  )
}

export default LoadMoreBtn
