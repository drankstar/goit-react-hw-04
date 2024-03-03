import { useEffect } from "react"
import ImageGallery from "./components/ImageGallery/ImageGallery"
import SearchBar from "./components/SearchBar/SearchBar"
import { useState } from "react"
import { imgApi } from "./imgSearchApi"
import LoadMoreBtn from "./components/LoadMoreBtn/LoadMoreBtn"
import ErrorMessage from "./components/ErrorMessage/ErrorMessage"
import Loader from "./components/Loader/Loader"
import Modal from "react-modal"
import ImageModal from "./components/ImageModal/ImageModal"
import styles from "./App.module.css"

Modal.setAppElement("#root")

function App() {
  const [loading, setLoading] = useState(false)
  const [page, setPage] = useState(1)
  const [error, setError] = useState(null)
  const [query, setQuery] = useState("")
  const [resp, setResp] = useState([])
  const [modalIsOpen, setIsOpen] = useState(false)
  const [currentImg, setCurrentImg] = useState(null)

  function openModal(image) {
    setCurrentImg(image)
    setIsOpen(true)
  }

  function closeModal() {
    setIsOpen(false)
  }

  const onSubmit = (value) => {
    setError("")
    setQuery(value)
    setResp([])
    setPage(1)
  }

  const fetchImeges = async (controller) => {
    try {
      setLoading(true)
      const { data } = await imgApi({ query, page, controller })
      setResp((prev) => [...prev, ...data.results])
    } catch (error) {
      if (!controller?.signal?.aborted) {
        setError("Oops something wrong!!!. Please try again.")
      }
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    if (query === "") {
      return
    }
    const controller = new AbortController()
    fetchImeges(controller)
    return () => controller.abort()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query, page])

  const handleLoadMore = () => {
    setPage(page + 1)
  }

  return (
    <div>
      <SearchBar onSubmit={onSubmit} />
      {resp.length > 0 && <ImageGallery onOpen={openModal} items={resp} />}
      {loading && <Loader />}
      {resp.length > 0 && <LoadMoreBtn click={handleLoadMore} />}
      {error && <ErrorMessage message={error} />}
      <Modal
        className={styles.modal}
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
      >
        <ImageModal image={currentImg} />
      </Modal>
    </div>
  )
}

export default App
