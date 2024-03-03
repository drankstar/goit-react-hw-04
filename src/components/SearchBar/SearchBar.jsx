import styles from "./SearchBar.module.css"

const SearchBar = ({ onSubmit }) => {
  const handleSubmit = (e) => {
    e.preventDefault()
    onSubmit(e.target.elements.query.value)
  }

  return (
    <>
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
