import React, { useState } from 'react'
import { useId } from 'react'

// we wrapped our function in forwardRef
const Input = React.forwardRef(function Input({
    label,
    type = "text",
    error = "",
    className = "",
    ...props
}, ref) {

    const id = useId()
    const [showPassword, setShowPassword] = useState(false)
    const isPasswordField = type === "password"
    const inputType = isPasswordField && showPassword ? "text" : type

    return (
        <div className='w-full'>
            {
                label && <label
                    className='inline-block mb-1 pl-1 muted-text'
                    htmlFor={id}>
                    {label}
                </label>
            }
            <div className='relative'>
                <input
                    type={inputType}
                    className={`form-input w-full px-3 py-2 rounded-lg outline-none duration-200 ${isPasswordField ? "pr-10" : ""} ${className}`}
                    id={id}
                    aria-invalid={Boolean(error)}
                    {...props}
                    ref={ref}
                />
                {isPasswordField && (
                    <button
                        type="button"
                        className='absolute inset-y-0 right-0 flex items-center pr-3 muted-text'
                        onClick={() => setShowPassword((prev) => !prev)}
                        aria-label={showPassword ? "Hide password" : "Show password"}
                    >
                        {showPassword ? (
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M17.94 17.94A10.94 10.94 0 0 1 12 20c-5 0-9.27-3.11-11-8 1.04-2.94 2.96-5.2 5.33-6.53" />
                                <path d="M1 1l22 22" />
                                <path d="M9.9 4.24A10.94 10.94 0 0 1 12 4c5 0 9.27 3.11 11 8a11.6 11.6 0 0 1-4.06 5.94" />
                                <path d="M14.12 14.12a3 3 0 1 1-4.24-4.24" />
                            </svg>
                        ) : (
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8S1 12 1 12z" />
                                <circle cx="12" cy="12" r="3" />
                            </svg>
                        )}
                    </button>
                )}
            </div>
            {error && <p className='field-error mt-1 pl-1 text-sm'>{error}</p>}
        </div>
    )
})

export default Input
