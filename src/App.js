import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import BasicFetch from './components/react-query/BasicFetch'
import BasicXhr from './components/react-query/BasicXhr'
import RQDashboard from './components/react-query/RQDashboard'
import Todo from './components/react-query/todos/Todo'
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
            <Route path='basic-xhr' element={<BasicXhr />} />
            <Route path='basic-fetch' element={<BasicFetch />} />
            <Route path='todos' element={<Todo />} />
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
