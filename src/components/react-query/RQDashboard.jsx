import './RQDashboard.css'
import { Link } from 'react-router-dom'

function RQDashboard() {
  return (
    <div className='RQDashboard'>
      <div className='link-box'>
        <div><Link to="/react-query/basic-fetch" className='link'>Basic RQ fetch</Link></div>
        <div className='desc'> Basic RQ fetch </div>
      </div>
    </div>
  )
}

export default RQDashboard