import React, { useState } from 'react'
import { Container, Logo, LogoutBtn } from '../index'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

const Header = () => {

  // Retrieveing authentication status from the Redux store
  const authStatus = useSelector((state) => state.auth.status)
  const navigate = useNavigate()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

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
      active: true,
    },
    {
      name: "Add Post",
      slug: "/add-post",
      active: authStatus,
    }
  ]

  return (
    
    <header className='nav-shell py-2 relative'>
      <Container>
        <nav className='flex items-center justify-between'>
          <div className='mr-4'><Link to="/"><Logo width='70px' /></Link></div>
    
          <button
            type="button"
            className='md:hidden text-white text-2xl px-3 py-2 rounded-lg'
            onClick={() => setIsMobileMenuOpen((prev) => !prev)}
            aria-label={isMobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? "✕" : "☰"}
          </button>

          <ul className='hidden md:flex ml-auto'>
            {
              navItems.map((item) => item.active ?
                <li key={item.name}>
                  <button
                    className='nav-btn inline-block md:px-6 px-1 py-2 duration-200 font-bold rounded-full'
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

        {isMobileMenuOpen && (
          <div className='md:hidden mt-3 rounded-xl border border-white/20 bg-black/20 backdrop-blur-sm p-2'>
            <ul className='flex flex-col gap-1'>
              {navItems.map((item) =>
                item.active ? (
                  <li key={item.name}>
                    <button
                      className='nav-btn w-full text-left px-3 py-2 rounded-lg font-bold'
                      onClick={() => {
                        navigate(item.slug)
                        setIsMobileMenuOpen(false)
                      }}
                    >
                      {item.name}
                    </button>
                  </li>
                ) : null
              )}
              {authStatus && (
                <li>
                  <div className='px-1 py-1'>
                    <LogoutBtn />
                  </div>
                </li>
              )}
            </ul>
          </div>
        )}
      </Container>
    </header>
  )
}

export default Header
