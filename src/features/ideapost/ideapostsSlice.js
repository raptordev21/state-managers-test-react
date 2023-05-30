import { createSlice, nanoid, createAsyncThunk } from '@reduxjs/toolkit'
import { sub } from 'date-fns'
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
            content, // update needed here, content -> body
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
    },
    reset: (state) => initialState,
  },
  extraReducers(builder) {
    builder
      .addCase(fetchIdeaPosts.pending, (state, action) => {
        state.status = 'loading'
      })
      .addCase(fetchIdeaPosts.fulfilled, (state, action) => {
        state.status = 'success'
        // Adding date and reactions
        let min = 1;
        const loadedPosts = action.payload.map(post => {
          post.date = sub(new Date(), { minutes: min++ }).toISOString();
          post.reactions = {
            thumbsUp: 0,
            wow: 0,
            heart: 0,
            rocket: 0,
            coffee: 0
          }
          return post;
        });

        // Add any fetched posts to the array
        // state.ideaposts = state.ideaposts.concat(loadedPosts)
        state.ideaposts = loadedPosts
      })
      .addCase(fetchIdeaPosts.rejected, (state, action) => {
        state.status = 'failed'
        state.error = action.error.message
      })
  }
})

export const selectAllPosts = (state) => state.ideaposts.ideaposts
export const getPostsStatus = (state) => state.ideaposts.status;
export const getPostsError = (state) => state.ideaposts.error;

export const selectPostById = (state, postId) => state.ideaposts.ideaposts.find(post => post.id === postId);

export const { postAdded, reactionAdded, reset } = ideapostsSlice.actions

export default ideapostsSlice.reducer