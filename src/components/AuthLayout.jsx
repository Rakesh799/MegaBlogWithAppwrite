import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'


// This component is used to protect certain pages based on authentication
const Protected = ({ children, authentication = true }) => {
    const navigate = useNavigate()
    const [loader, setLoader] = useState(true)

    // Retrieving the current authentication status from the Redux store
    const authStatus = useSelector((state) => state.auth.status)

    // Checking authentication status and navigating accordingly
    useEffect(() => {
        if (authentication && authStatus !== authentication) {
            navigate("/login")
        }
        else if (!authentication && authStatus !== authentication) {
            navigate("/")
        }
        setLoader(false)
    }, [authStatus, navigate, authentication])


    // Showing loading indicator while checking authentication status
    return loader ? <h1>Loading...</h1> : <>{children}</>

}

export default Protected
