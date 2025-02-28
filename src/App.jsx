import { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import authService from './appwrite/auth_service'
import { login, logout } from './store/authSlice'
import { Header, Footer } from './components/index'
import { Outlet } from 'react-router-dom'

function App() {

  const [loading, setLoading] = useState(true)
  const dispatch = useDispatch()

  useEffect(() => {
    // Checking if the user is authenticated when the app initializes.
    authService.getCurrentUser()
      .then((userData) => {
        if (userData) {
          dispatch(login({ userData })) // Logging in the user if authenticated
        } else {
          dispatch(logout())
        }
      })
      .finally(() => setLoading(false))
  }, [])

  return !loading ? ( // Renders only after authentication check is complete 
    <div className='min-h-screen flex flex-wrap content-between bg-[#f6bbae]'>
      <div className='w-full block'>
        <Header />
        <main>
          <Outlet />
        </main>
        <Footer />
      </div>
    </div>) : null // Showing nothing while loading
}

export default App
