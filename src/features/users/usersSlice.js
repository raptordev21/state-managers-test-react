import { createSlice } from '@reduxjs/toolkit'

const initialState = [
  { id: 0, name: 'Himanshu' },
  { id: 1, name: 'Deeksha' },
]

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {

  }
})

export const selectAllUsers = (state) => state.users

export default usersSlice.reducer