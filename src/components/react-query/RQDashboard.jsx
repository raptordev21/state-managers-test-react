import './RQDashboard.css'
import { Link } from 'react-router-dom'

function RQDashboard() {
  return (
    <div className='RQDashboard'>
      <div className='link-box'>
        <div><Link to="/react-query/basic-xhr" className='link'>Basic RQ xhr</Link></div>
        <div className='desc'> Basic React Query xhr. </div>
      </div>
      <div className='link-box'>
        <div><Link to="/react-query/basic-fetch" className='link'>Basic RQ fetch</Link></div>
        <div className='desc'> Basic React Query fetch. </div>
      </div>
      <div className='link-box'>
        <div><Link to="/react-query/todos" className='link'>React Query Todo App</Link></div>
        <div className='desc'> CRUD app using axios and react query. </div>
      </div>
    </div>
  )
}

export default RQDashboard