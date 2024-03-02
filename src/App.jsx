import { useEffect } from "react"
import { ImageGallery } from "./components/ImageGallery/ImageGallery"
import SearchBar from "./components/SearchBar/SearchBar"
import { useState } from "react"
import { imgApi } from "./imgSearchApi"
import styles from "./App.module.css"

function App() {
  const [query, setQuery] = useState("")
  const [resp, setResp] = useState([])
  const onSubmit = (value) => {
    setQuery(value)
  }

  const fetchImeges = async () => {
    try {
      const { data } = await imgApi(query)
      setResp(data.results)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    fetchImeges()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query])

  return (
    <div>
      <SearchBar onSubmit={onSubmit} />
      {resp.length > 0 && <ImageGallery items={resp} />}
    </div>
  )
}

export default App
