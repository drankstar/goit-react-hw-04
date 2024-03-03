import axios from "axios"

const api = axios.create({
  baseURL: "https://api.unsplash.com",
})
api.defaults.headers["Authorization"] =
  "Client-ID USEqqPJDucLZ4nXfR3DVE6RsVngXvr-MFPf1WeuO4PE"
api.defaults.headers["Accept-Version"] = "v1"

export const imgApi = ({ query, page, controller }) => {
  const params = {
    query,
    page,
    per_page: 20,
    orientation: "landscape",
  }
  return api.get("/search/photos", {
    params,
    per_page: 20,
    signal: controller.signal,
  })
}
