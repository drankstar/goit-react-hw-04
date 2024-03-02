import styles from "./ErrorMessage.module.css"
const ErrorMessage = ({ message }) => {
  return <div className={styles.msg}>{message}</div>
}

export default ErrorMessage
