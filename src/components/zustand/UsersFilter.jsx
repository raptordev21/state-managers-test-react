import './UsersFilter.css'
import useStore from '../../zstore/zstore'
import { useEffect, useState } from 'react'

function UsersFilter() {
  const [loading, setLoading] = useState(false)
  const filter = useStore((state) => state.filter)
  const setFilter = useStore((state) => state.setFilter)
  const users = useStore((state) => state.users)
  const setUsers = useStore((state) => state.setUsers)

  useEffect(() => {
    async function getUsers() {
      try {
        setLoading(true)
        let url = 'https://jsonplaceholder.typicode.com/users'
        let res = await fetch(url, {
          method: "GET",
          headers: {
            "Content-Type": "application/json"
          }
        })
        if (res.ok) {
          let data = await res.json()
          setUsers(data)
        } else {
          let errData = await res.json()
          console.log(errData)
        }
      } catch (err) {
        console.log(err)
      } finally {
        setLoading(false)
      }
    }

    if (users.length === 0) {
      getUsers()
    }

  }, [setUsers, users.length])

  if (loading) {
    return (
      <div className='UsersFilter'>
        <div className='box'>
          <h1>Loading...</h1>
        </div>
      </div>
    )
  }

  return (
    <div className='UsersFilter'>
      <div className='box'>
        <div className="filter">
          <input type="text" value={filter} onChange={(e) => setFilter(e.target.value)} placeholder="Filter By Name" />
        </div>
        <div className="users">
          {users
            .filter((user) => user.name.toLowerCase().includes(filter.toLowerCase()))
            .map((user) => {
              return (
                <div key={user.id} className="user">
                  <h2>{user.name}</h2>
                  <p>{user.email}</p>
                </div>
              )
            })}
        </div>
      </div>
    </div>
  )
}

export default UsersFilter