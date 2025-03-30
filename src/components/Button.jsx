import React from 'react'

const Button = ({
    children,
    type = "button",
    bgColor = "bg-[#8b322c]",
    textColor = "text-white",
    className = "",
    ...props
}) => {
    return (
        <button className={`px-4 py-2 rounded-lg ${bgColor} ${textColor} ${className}`}{...props}>
            {children}
        </button>
    )
}

export default Button
