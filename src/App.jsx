import { useEffect } from "react"
import ImageGallery from "./components/ImageGallery/ImageGallery"
import SearchBar from "./components/SearchBar/SearchBar"
import { useState } from "react"
import { imgApi } from "./imgSearchApi"
import LoadMoreBtn from "./components/LoadMoreBtn/LoadMoreBtn"
import ErrorMessage from "./components/ErrorMessage/ErrorMessage"
import Loader from "./components/Loader/Loader"

function App() {
  const [loading, setLoading] = useState(false)
  const [page, setPage] = useState(1)
  const [error, setError] = useState(null)
  const [query, setQuery] = useState("")
  const [resp, setResp] = useState([])

  const onSubmit = (value) => {
    setQuery(value)
    setResp([])
    setPage(1)
  }

  const fetchImeges = async () => {
    try {
      setLoading(true)
      const { data } = await imgApi(query, page)
      setResp((prev) => [...prev, ...data.results])
    } catch (error) {
      setError("Oops something wrong!!!. Please try again.")
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    if (query === "") {
      return
    }
    fetchImeges()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query, page])

  console.log(resp)
  const handleLoadMore = () => {
    setPage(page + 1)
  }

  return (
    <div>
      <SearchBar onSubmit={onSubmit} />
      {resp.length > 0 && <ImageGallery items={resp} />}
      {loading && <Loader />}
      {resp.length > 0 && <LoadMoreBtn click={handleLoadMore} />}
      {error && <ErrorMessage message={error} />}
    </div>
  )
}

export default App
