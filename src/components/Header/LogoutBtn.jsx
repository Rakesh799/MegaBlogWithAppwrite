import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import authService from '../../appwrite/auth_service'
import { logout } from '../../store/authSlice'
import ConfirmModal from '../ConfirmModal'

const LogoutBtn = () => {
    const dispatch = useDispatch()
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [isLoggingOut, setIsLoggingOut] = useState(false)

    const logoutHandler = async () => {
        setIsLoggingOut(true)
        try {
            await authService.logout()
            dispatch(logout())
            setIsModalOpen(false)
        } finally {
            setIsLoggingOut(false)
        }
    }

    return (
        <>
            <button
                className='nav-btn inline-block md:px-6 px-1 py-2 duration-200 font-bold rounded-full'
                onClick={() => setIsModalOpen(true)}
            >
                Logout
            </button>

            <ConfirmModal
                isOpen={isModalOpen}
                title="Confirm Logout"
                message="Are you sure you want to logout?"
                confirmText="Logout"
                cancelText="Cancel"
                onConfirm={logoutHandler}
                onCancel={() => setIsModalOpen(false)}
                isLoading={isLoggingOut}
            />
        </>
    )
}

export default LogoutBtn
