import { createSlice, nanoid, createAsyncThunk } from '@reduxjs/toolkit'
// import { sub } from 'date-fns'
import axios from 'axios'

const POSTS_URL = 'https://jsonplaceholder.typicode.com/posts'

const initialState = {
  ideaposts: [],
  status: 'idle', // idle | loading | success | failed
  error: null
}

export const fetchIdeaPosts = createAsyncThunk('ideaposts/fetchIdeaPosts', async () => {
  const res = await axios.get(POSTS_URL)
  return res.data
})

const ideapostsSlice = createSlice({
  name: 'ideaposts',
  initialState,
  reducers: {
    postAdded: {
      reducer(state, action) {
        state.ideaposts.push(action.payload)
      },
      prepare(title, content, userId) {
        return {
          payload: {
            id: nanoid(),
            title,
            content,
            date: new Date().toISOString(),
            userId,
            reactions: {
              thumbsUp: 0,
              wow: 0,
              heart: 0,
              rocket: 0,
              coffee: 0
            }
          }
        }
      }
    },
    reactionAdded(state, action) {
      const { postId, reaction } = action.payload
      const existingPost = state.ideaposts.find(post => post.id === postId)
      if (existingPost) {
        existingPost.reactions[reaction]++
      }
    }
  },
  extraReducers(builder) {

  }
})

export const selectAllPosts = (state) => state.ideaposts.ideaposts

export const { postAdded, reactionAdded } = ideapostsSlice.actions

export default ideapostsSlice.reducer