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
    
    <header className='bg-[#8B322C] py-2'>
      <Container>
        <nav className='flex items-center'>
          <div className='mr-4'><Link to="/"><Logo width='70px' /></Link></div>
          <ul className='flex ml-auto'>
            {
              navItems.map((item) => item.active ?
                <li key={item.name}>
                  <button
                    className='inline-block md:px-6 px-1 py-2 duration-200 text-white hover:bg-[#f6bbae] hover:text-black font-bold rounded-full'
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
