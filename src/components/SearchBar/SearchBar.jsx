import toast, { Toaster } from "react-hot-toast"
import styles from "./SearchBar.module.css"

const SearchBar = ({ onSubmit }) => {
  const handleSubmit = (e) => {
    e.preventDefault()
    if (e.target.elements.query.value === "") {
      toast.error("Please enter a search word!")
    }
    onSubmit(e.target.elements.query.value)
  }

  return (
    <>
      <Toaster position='top-center' reverseOrder={false} />
      <header className={styles.container}>
        <form className={styles.form} onSubmit={handleSubmit}>
          <input
            className={styles.input}
            type='text'
            autoComplete='off'
            autoFocus
            placeholder='Search images and photos'
            name='query'
          />
          <button className={styles.btn} type='submit'>
            Search
          </button>
        </form>
      </header>
    </>
  )
}

export default SearchBar
