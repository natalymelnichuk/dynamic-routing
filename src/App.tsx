import { BrowserRouter, Routes, Route, Navigate, useLocation } from 'react-router-dom'
import './App.css'
import { AnimatePresence } from 'framer-motion'
import BlogIndex from './pages/BlogIndex'
import { PostPage } from './pages/BlogPost'
import Login from './pages/Login'
import Navbar from './components/Navbar'
import { AuthProvider } from './context/AuthContext'
import ProtectedRoute from './components/ProtectedRoute'
import AdminDashboard from './pages/AdminDashboard'
import AnimatedPage from './components/AnimatedPage'



function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Navigate replace to="/blog" />} />
        <Route 
          path="/blog" 
          element={<AnimatedPage><BlogIndex /></AnimatedPage>} 
        />
        <Route 
          path="/blog/:slug" 
          element={<AnimatedPage><PostPage /></AnimatedPage>} 
        />
        <Route 
          path="/login" 
          element={<AnimatedPage><Login /></AnimatedPage>} 
        />
        <Route 
          path="/admin" 
          element={
            <ProtectedRoute>
              <AnimatedPage><AdminDashboard /></AnimatedPage>
            </ProtectedRoute>
          } 
        />
      </Routes>
    </AnimatePresence>
  );
}

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <div className="min-h-screen bg-gray-50 text-gray-900">
          <Navbar />
          <main>
            <AnimatedRoutes />
          </main>
        </div>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
