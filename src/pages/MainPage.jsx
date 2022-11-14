import { Link, Outlet } from 'react-router-dom'
import Header from '../components/shared/Header'
import './MainPage.css'

function MainPage() {
  return (
    <div className='MainPage'>
      <Header />
      <div className='main-view'>
        <div className='side-nav'>
          <ul>
            <li><Link to="/react-query" className='link'>React Query</Link></li>
            <li><Link to="/zustand" className='link'>Zustand</Link></li>
            <li><Link to="/redux" className='link'>Redux</Link></li>
          </ul>
        </div>
        <div className='main-content'>
          <Outlet />
        </div>
      </div>
    </div>
  )
}

export default MainPage