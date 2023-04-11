import { createSlice } from '@reduxjs/toolkit'

const initialState = [
  { id: 1, title: 'Learn React + Redux', content: 'Learn It' },
  { id: 2, title: 'Learn Node', content: 'Learn It' },
]

const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    postAdded(state, action) {
      state.push(action.payload)
    }
  }
})

export const selectAllPosts = (state) => state.posts

export const { postAdded } = postsSlice.actions

export default postsSlice.reducer