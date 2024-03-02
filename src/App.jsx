import { useEffect } from "react"
import { ImageGallery } from "./components/ImageGallery/ImageGallery"
import SearchBar from "./components/SearchBar/SearchBar"
import { useState } from "react"
import { imgApi } from "./imgSearchApi"

function App() {
  const [query, setQuery] = useState("")
  const [resp, setResp] = useState([])
  console.log(resp)
  const onSubmit = (value) => {
    setQuery(value)
  }

  const fetchImeges = async () => {
    try {
      const { data } = await imgApi(query)
      setResp(data)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    fetchImeges()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query])

  return (
    <>
      <SearchBar onSubmit={onSubmit} />
      <ImageGallery item={resp} />
    </>
  )
}

export default App
