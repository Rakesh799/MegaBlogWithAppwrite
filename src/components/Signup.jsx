import React from 'react'
import authService from '../appwrite/auth_service'
import { Link, useNavigate } from 'react-router-dom'
import { login } from '../store/authSlice'
import { Button, Input, Logo } from "./index"
import { useDispatch } from 'react-redux'
import { useForm } from 'react-hook-form'

const Signup = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const {
        register,
        handleSubmit,
        setError,
        clearErrors,
        formState: { errors, isSubmitting }
    } = useForm()

    const mapSignupError = (error) => {
        const message = error?.message || ""
        const normalized = message.toLowerCase()

        if (normalized.includes("password must be between 8 and 256 characters")) {
            return { password: "Password must be between 8 and 256 characters." }
        }

        if (normalized.includes("invalid `email`") || normalized.includes("invalid email")) {
            return { password: "Please check your details and try again." }
        }

        if (normalized.includes("already exists")) {
            return { password: "This email is already registered. Try signing in instead." }
        }

        return { password: "Unable to create account right now. Please try again." }
    }

    // Handles user sign-up
    const handlesignup = async (data) => {
        clearErrors()
        try {
            const userData = await authService.createAccount(data) // Creates a new user account
            if (userData) {
                
                const currentUser = await authService.getCurrentUser() // After successful signup, fetch the current user

                if (currentUser) dispatch(login(data)) // Dispatch login to store user data in Redux
                
                navigate("/") // Navigate to the homepage after successful login
            }
        } catch (error) {
            const friendlyErrors = mapSignupError(error)

            if (friendlyErrors.password) {
                setError("password", { type: "server", message: friendlyErrors.password })
            }
        }
    }

    return (
        <div className="flex items-center justify-center">
            <div className={`form-panel mx-auto w-full max-w-lg rounded-xl p-10`}>
                <div className="mb-2 flex justify-center">
                    <span className="w-full max-w-[100px] flex justify-center">
                        <Logo width="100%" />
                    </span>
                </div>

                <h2 className="text-center text-2xl font-bold leading-tight">Sign up to create account</h2>

                <p className="muted-text mt-2 text-center text-base">
                    Already have an account?&nbsp;
                    <Link
                        to="/login"
                        className="app-link font-medium transition-all duration-200 hover:underline"
                    >
                        Sign In
                    </Link>
                </p>

                <form onSubmit={handleSubmit(handlesignup)}>
                    <Input
                        label="Full Name: "
                        placeholder="Enter your Full Name"
                        type="text"
                        error={errors.name?.message}
                        {...register("name", { required: "Please enter your full name." })}
                    />
                    <Input
                        label="Email: "
                        placeholder="Enter your email"
                        type="email"
                        {...register("email", {
                            required: "Please enter your email address.",
                            validate: {
                                matchPatern: (value) => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) || "Please enter a valid email address.",
                            }
                        })}
                    />
                    <Input
                        label="Password: "
                        placeholder="Enter your password"
                        type="password"
                        error={errors.password?.message}
                        {...register("password", {
                            required: "Please enter a password.",
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
                        className="w-full mt-8"
                        isLoading={isSubmitting}
                        disabled={isSubmitting}
                    >
                        {isSubmitting ? "Creating Account..." : "Create Account"}
                    </Button>

                </form>
            </div>
        </div>
    )
}

export default Signup
