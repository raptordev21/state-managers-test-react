import create from 'zustand'

const useStore = create((set) => ({
  filter: "",
  users: [],
  setFilter: (filter) => set((state) => ({
    ...state,
    filter,
  })),
  setUsers: (users) => set((state) => ({
    ...state,
    users,
  })),
}))

export default useStore