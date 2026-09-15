import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import './App.css'
import BlogIndex from './pages/BlogIndex'
import { PostPage } from './pages/BlogPost'
import Login from './pages/Login'
import Navbar from './components/Navbar'
import { AuthProvider } from './context/AuthContext'
import ProtectedRoute from './components/ProtectedRoute'
import AdminDashboard from './pages/AdminDashboard'


function App() {  
  return (
    <AuthProvider>
      <BrowserRouter>
        <div className="min-h-screen bg-gray-50 text-gray-900">
          <Navbar />

          <main>
            <Routes>
              <Route path='/' element={<Navigate replace to="/blog"/>} />
              <Route path='/blog' element={<BlogIndex />} />
              <Route path='/blog/:slug' element={<PostPage />} />
              <Route path='/login' element={<Login />} />

              <Route path='/admin' element={
                <ProtectedRoute>
                  <AdminDashboard />
                </ProtectedRoute>
              } />
            </Routes>
          </main>
        </div>
      </BrowserRouter>
    </AuthProvider>
  )
}

export default App;
