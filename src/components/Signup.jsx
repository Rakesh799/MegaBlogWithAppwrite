import React, { useState } from 'react'
import authService from '../appwrite/auth_service'
import { Link, useNavigate } from 'react-router-dom'
import { login } from '../store/authSlice'
import { Button, Input, Logo } from "./index"
import { useDispatch } from 'react-redux'
import { useForm } from 'react-hook-form'

const Signup = () => {
    const navigate = useNavigate()
    const [error, setError] = useState("")
    const dispatch = useDispatch()
    const { register, handleSubmit } = useForm()

    
    return (
        <div>

        </div>
    )
}

export default Signup
