import { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import authService from './appwrite/auth_service'
import { login, logout } from './store/authSlice'
import {Header, Footer} from './components/index'

function App() {

  const [loading, setLoading] = useState(true)
  const dispatch = useDispatch()

  useEffect(() => {
    authService.getCurrentUser() // here we are asking that user is logged in or not 
      .then((userData) => { // here userData is just a variable
        if (userData) {
          dispatch(login({ userData }))
        } else {
          dispatch(logout())
        }
      })
      .finally(() => setLoading(false))
  }, [])

  return !loading ? <div className='min-h-screen flex flex-wrap content-between bg-yellow-300'>
    <div className='w-full block'>
      <Header />
      <main>
        {/* <Outlet /> */} Here outlets will be displayed
      </main>
      <Footer />
    </div>
  </div> : null
}

export default App
