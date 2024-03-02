const SearchBar = ({ onSubmit }) => {
  const handleSubmit = (e) => {
    e.preventDefault()
    onSubmit(e.target.elements.query.value)
  }

  return (
    <>
      <header>
        <form onSubmit={handleSubmit}>
          <input
            type='text'
            autoComplete='off'
            autoFocus
            placeholder='Search images and photos'
            name='query'
          />
          <button type='submit'>Search</button>
        </form>
      </header>
    </>
  )
}

export default SearchBar
