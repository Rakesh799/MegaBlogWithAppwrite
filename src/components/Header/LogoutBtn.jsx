import React from 'react'
import { useDispatch } from 'react-redux'
import authService from '../../appwrite/auth_service'
import { logout } from '../../store/authSlice'

const LogoutBtn = () => {
    const dispatch = useDispatch()

    const logoutHandler = () => {
        authService.logout()
            .then(() => dispatch(logout()))
    }

    return (
        <button 
        className='inline-block px-6 py-2 duration-200 hover:bg-blue-200 hover:font-bold rounded-full'
        onClick={logoutHandler}>
            Logout
        </button>
    )
}

export default LogoutBtn
