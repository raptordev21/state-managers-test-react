import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { mountStoreDevtool } from 'simple-zustand-devtools'
import useStore from './zstore/zstore'
import './App.css'
import BasicFetch from './components/react-query/BasicFetch'
import BasicXhr from './components/react-query/BasicXhr'
import RQDashboard from './components/react-query/RQDashboard'
import Todo from './components/react-query/todos/Todo'
import UsersFilter from './components/zustand/UsersFilter'
import ZDashboard from './components/zustand/ZDashboard'
import MainPage from './pages/MainPage'
import ReduxDashboard from './components/redux/ReduxDashboard'
import Counter from './components/redux/counter/Counter'
import PostsList from './components/redux/blog/PostsList'
import IdeaPostsList from './components/redux/ideapost/IdeaPostList'

if (process.env.NODE_ENV === 'development') {
  mountStoreDevtool('Store', useStore);
}

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
            <Route path='' element={<ZDashboard />} />
            <Route path='users-filter' element={<UsersFilter />} />
          </Route>
          <Route path='/redux' element={<MainPage />}>
            <Route path='' element={<ReduxDashboard />} />
            <Route path='counter' element={<Counter />} />
            <Route path='blog-post' element={<PostsList />} />
            <Route path='idea-post' element={<IdeaPostsList />} />
          </Route>
        </Routes>
      </Router>
    </div>
  )
}

export default App
