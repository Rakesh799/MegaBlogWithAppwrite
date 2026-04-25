import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { login as storeLogin } from '../store/authSlice'
import { Button, Input, Logo } from './index'
import { useDispatch } from 'react-redux'
import authService from '../appwrite/auth_service'
import { useForm } from 'react-hook-form'

const Login = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const {
        register,
        handleSubmit,
        setError,
        clearErrors,
        formState: { errors, isSubmitting }
    } = useForm()

    const mapLoginError = (error) => {
        const message = error?.message || ""
        const normalized = message.toLowerCase()

        if (normalized.includes("invalid credentials")) {
            return {
                password: "Please check your email and password and try again.",
            }
        }

        if (normalized.includes("password must be between 8 and 256 characters")) {
            return {
                password: "Password must be between 8 and 256 characters.",
            }
        }

        return {
            password: "Unable to sign in right now. Please try again.",
        }
    }

    const handlelogin = async (data) => {
        clearErrors()
        try {
            const session = await authService.login(data) //AttemptLogin

            if (session) {
                const userData = await authService.getCurrentUser() //Getting Logged-in user's data
                if (userData) dispatch(storeLogin(userData)) // Saving user to our Redux Store
                navigate("/")
            }
        } catch (error) {
            const friendlyErrors = mapLoginError(error)

            if (friendlyErrors.password) {
                setError("password", { type: "server", message: friendlyErrors.password })
            }
        }
    }


    return (
        <div className='flex items-center justify-center w-full'>
            <div className='form-panel mx-auto w-full max-w-lg rounded-xl p-10'>
                <div className="mb-2 flex justify-center">
                    <span className="inline-block w-full max-w-[100px]">
                        <Logo width="100%" />
                    </span>
                </div>

                <h2 className="text-center text-2xl font-bold leading-tight">Sign in to your account</h2>

                <p className="muted-text mt-2 text-center text-base">
                    Don&apos;t have any account?&nbsp;
                    <Link to="/signup" className="app-link font-medium transition-all duration-200 hover:underline">Sign Up</Link>
                </p>

                <form onSubmit={handleSubmit(handlelogin)} className='mt-8'>
                    <div className='space-y-5'>
                        <Input
                            label="Email: "
                            placeholder="Enter your email"
                            type="email"
                            {...register("email", {
                                required: "Please enter your email address.",
                                validate: {
                                    matchPatern: (value) => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/
                                        .test(value) ||
                                        "Please enter a valid email address.",
                                }
                            })}
                        />
                        <Input
                            label="password: "
                            placeholder="Enter Your Password"
                            type="password"
                            error={errors.password?.message}
                            {...register("password", {
                                required: "Please enter your password.",
                                minLength: {
                                    value: 8,
                                    message: "Password must be at least 8 characters.",
                                },
                                maxLength: {
                                    value: 256,
                                    message: "Password must be at most 256 characters.",
                                },
                            })}
                        />
                        <Button
                            type="submit"
                            className="w-full"
                            isLoading={isSubmitting}
                            disabled={isSubmitting}
                        >
                            {isSubmitting ? "Signing in..." : "Sign in"}
                        </Button>
                    </div>
                </form>

            </div>
        </div>
    )
}

export default Login
