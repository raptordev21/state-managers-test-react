import './ReduxDashboard.css'
import { Link } from 'react-router-dom'

function ReduxDashboard() {
  return (
    <div className='ReduxDashboard'>
      <div className='link-box'>
        <div><Link to="/redux/counter" className='link'>Counter</Link></div>
        <div className='desc'> Counter using redux store only. </div>
      </div>
    </div>
  )
}

export default ReduxDashboard