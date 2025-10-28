import AdminLoginPage from './pages/AdminLoginPage'
import { Route, Routes } from 'react-router-dom'
import AdminSignupPage from './pages/AdminSignupPage'
import AdminDashboard from './pages/AdminDashboard'
import ProtectedRoute from './auth/ProtectedRoute'

function App() {
  document.documentElement.classList.add()

  return (
    <Routes>
      <Route path='/' element={<AdminLoginPage />} />
      <Route path='/admin/signup' element={<AdminSignupPage />} />
      <Route
        path="/admin/dashboard"
        element={
          <ProtectedRoute>
            <AdminDashboard />
          </ProtectedRoute>
        }
      />
    </Routes>
  )
}

export default App