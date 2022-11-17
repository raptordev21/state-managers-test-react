import axios from "axios"

const postsApiAxios = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com"
})

export const getPosts = async () => {
  const res = await postsApiAxios.get("/posts")
  return res.data
}

export default postsApiAxios