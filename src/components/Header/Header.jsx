import React from 'react'
import { Container, Logo, LogoutBtn } from '../index'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

const Header = () => {

  // Retrieveing authentication status from the Redux store
  const authStatus = useSelector((state) => state.auth.status)
  const navigate = useNavigate()

  const navItems = [
    {
      name: 'Home',
      slug: "/",
      active: true
    },
    {
      name: "Login",
      slug: "/login",
      active: !authStatus,
    },
    {
      name: "Signup",
      slug: "/signup",
      active: !authStatus,
    },
    {
      name: "All Posts",
      slug: "/all-posts",
      active: authStatus,
    },
    {
      name: "Add Post",
      slug: "/add-post",
      active: authStatus,
    }
  ]

  return (
    
    <header>
      <Container>
        <nav className='flex'>
          <div className='mr-4'><Link to="/"><Logo width='70px' /></Link></div>
          <ul className='flex ml-auto'>
            {
              navItems.map((item) => item.active ?
                <li key={item.name}>
                  <button
                    className='inline-block px-6 py-2 duration-200 hover:bg-blue-100 rounded-full'
                    onClick={() => navigate(item.slug)}
                  >
                    {item.name}
                  </button>
                </li> : null)
            }
            {// here we will conditionally render logout button
              authStatus && <li><LogoutBtn/></li>
            }
          </ul>
        </nav>
      </Container>
    </header>
  )
}

export default Header
