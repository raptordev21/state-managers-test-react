import './ZDashboard.css'
import { Link } from 'react-router-dom'

function ZDashboard() {
  return (
    <div className='ZDashboard'>
      <div className='link-box'>
        <div><Link to="/zustand/users-filter" className='link'>Users Filter</Link></div>
        <div className='desc'> Get Users from fetch, store in global zustand store and also filter it. </div>
      </div>
    </div>
  )
}

export default ZDashboard