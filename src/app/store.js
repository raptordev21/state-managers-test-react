import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../features/counter/counterSlice'
import postsReducer from '../features/blogpost/postsSlice'
import ideapostsReducer from '../features/ideapost/ideapostsSlice'
import usersReducer from '../features/users/usersSlice'

export default configureStore({
  reducer: {
    counter: counterReducer,
    posts: postsReducer,
    users: usersReducer,
    ideaposts: ideapostsReducer,
  }
})