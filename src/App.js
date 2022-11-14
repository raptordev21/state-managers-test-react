import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import BasicFetch from './components/react-query/BasicFetch'
import RQDashboard from './components/react-query/RQDashboard'
import MainPage from './pages/MainPage'

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<MainPage />}>
            <Route path='' element={<RQDashboard />} />
          </Route>
          <Route path='/react-query' element={<MainPage />}>
            <Route path='' element={<RQDashboard />} />
            <Route path='basic-fetch' element={<BasicFetch />} />
          </Route>
          <Route path='/zustand' element={<MainPage />}>
            <Route path='' element={<RQDashboard />} />
            <Route path='basic-fetch' element={<BasicFetch />} />
          </Route>
          <Route path='/redux' element={<MainPage />}>
            <Route path='' element={<RQDashboard />} />
            <Route path='basic-fetch' element={<BasicFetch />} />
          </Route>
        </Routes>
      </Router>
    </div>
  )
}

export default App
