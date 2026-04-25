import React from 'react'

const Button = ({
    children,
    type = "button",
    bgColor = "app-btn",
    textColor = "",
    className = "",
    isLoading = false,
    disabled = false,
    ...props
}) => {
    const isDisabled = isLoading || disabled

    return (
        <button
            type={type}
            disabled={isDisabled}
            aria-busy={isLoading}
            className={`px-4 py-2 rounded-lg inline-flex items-center justify-center gap-2 ${bgColor} ${textColor} ${isDisabled ? "opacity-70 cursor-not-allowed" : ""} ${className}`}
            {...props}
        >
            {isLoading && (
                <span
                    className="inline-block h-4 w-4 animate-spin rounded-full border-2 border-current border-r-transparent"
                    aria-hidden="true"
                />
            )}
            {children}
        </button>
    )
}

export default Button
