import { createSlice } from '@reduxjs/toolkit'

const initialState = [
  { id: 1, title: 'Learn React + Redux', content: 'Learn It' },
  { id: 2, title: 'Learn Node', content: 'Learn It' },
]

const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {}
})

export const selectAllPosts = (state) => state.posts

export default postsSlice.reducer