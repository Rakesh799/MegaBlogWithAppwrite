import React from 'react'
import { useId } from 'react'


// we wrapped our function in forwardRef
const Input = React.forwardRef(function Input({
    label,
    type = "text",
    className = "",
    ...props
}, ref) {

    const id = useId()
    return (
        <div className='w-full'>
            {
                label && <label
                    className='inline-block mb-1 pl-1'
                    htmlFor={id}>
                    {label}
                </label>
            }

            <input
                type={type}
                className={`w-full px-3 py-2 rounded-lg bg-white text-black outline-none focus:bg-gray-50 duration-200 border border-gray-200 ${className}`}
                id={id}
                {...props}
                ref={ref}
            />

        </div>
    )
})


export default Input

