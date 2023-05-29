import './ReduxDashboard.css'
import { Link } from 'react-router-dom'

function ReduxDashboard() {
  return (
    <div className='ReduxDashboard'>
      <div className='link-box'>
        <div><Link to="/redux/counter" className='link'>Counter</Link></div>
        <div className='desc'> Counter using redux store only. </div>
      </div>
      <div className='link-box'>
        <div><Link to="/redux/blog-post" className='link'>Blog Post</Link></div>
        <div className='desc'> Blog Post using redux only, no API integration. </div>
      </div>
      <div className='link-box'>
        <div><Link to="/redux/idea-post" className='link'>Idea Post</Link></div>
        <div className='desc'> Idea Post using redux with API integration. </div>
      </div>
    </div>
  )
}

export default ReduxDashboard