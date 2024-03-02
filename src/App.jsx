import { useEffect } from "react"
import { ImageGallery } from "./components/ImageGallery/ImageGallery"
import SearchBar from "./components/SearchBar/SearchBar"
import { useState } from "react"
import { imgApi } from "./imgSearchApi"
import LoadMoreBtn from "./components/LoadMoreBtn/LoadMoreBtn"

function App() {
  const [loadMore, setLoadMore] = useState(1)
  const [query, setQuery] = useState("")
  const [resp, setResp] = useState([])
  const onSubmit = (value) => {
    setQuery(value)
    setLoadMore(1)
  }

  const fetchImeges = async () => {
    try {
      const { data } = await imgApi(query, loadMore)
      setResp(data.results)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    fetchImeges()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query, loadMore])

  const handleLoadMore = () => {
    setLoadMore(loadMore + 1)
  }

  return (
    <div>
      <SearchBar onSubmit={onSubmit} />
      <ImageGallery items={resp} />
      {resp.length > 0 && <LoadMoreBtn click={handleLoadMore} />}
    </div>
  )
}

export default App
