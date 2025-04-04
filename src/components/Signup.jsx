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

    // Handles user sign-up
    const handlesignup = async (data) => {
        setError("") // Reset any previous errors
        try {
            const userData = await authService.createAccount(data) // Creates a new user account
            if (userData) {
                
                const currentUser = await authService.getCurrentUser() // After successful signup, fetch the current user

                if (currentUser) dispatch(login(data)) // Dispatch login to store user data in Redux
                
                navigate("/") // Navigate to the homepage after successful login
            }
        } catch (error) {
            setError(error.message)
        }
    }

    return (
        <div className="flex items-center justify-center">
            <div className={`mx-auto w-full max-w-lg bg-gray-100 rounded-xl p-10 border border-black/10`}>
                <div className="mb-2 flex justify-center">
                    <span className="w-full max-w-[100px] flex justify-center">
                        <Logo width="100%" />
                    </span>
                </div>

                <h2 className="text-center text-2xl font-bold leading-tight">Sign up to create account</h2>

                <p className="mt-2 text-center text-base text-black/60">
                    Already have an account?&nbsp;
                    <Link
                        to="/login"
                        className="font-medium text-primary transition-all duration-200 hover:underline"
                    >
                        Sign In
                    </Link>
                </p>

                {error && <p className='text-red-600 mt-8 text-center'>{error}</p>}

                <form onSubmit={handleSubmit(handlesignup)}>
                    <Input
                        label="Full Name: "
                        placeholder="Enter your Full Name"
                        type="text"
                        {...register("name", { required: true })}
                    />
                    <Input
                        label="Email: "
                        placeholder="Enter your email"
                        type="email"
                        {...register("email", {
                            required: true,
                            validate: {
                                matchPatern: (value) => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) || "Email address must be a valid address",
                            }
                        })}
                    />
                    <Input
                        label="Password: "
                        placeholder="Enter your password"
                        type="password"
                        {...register("password", { required: true })}
                    />
                    <Button
                        type="submit"
                        className="w-full mt-8"
                    >Create Account
                    </Button>

                </form>
            </div>
        </div>
    )
}

export default Signup
