import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import './App.css'
import BlogIndex from './pages/BlogIndex'
import { PostPage } from './pages/BlogPost'

function App() {
  
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path='/' element={<Navigate replace to="/blog"/>} />
          <Route path='/blog' element={<BlogIndex />} />
          <Route path='/blog/:slug' element={<PostPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App;
