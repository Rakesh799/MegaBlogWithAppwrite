import React, { forwardRef, useId } from 'react'

const Select = ({
    options,
    label,
    className = "",
    ...props
}, ref) => {

    const id = useId()

    return (
        <div className='w-full'>
            {label && <label htmlFor={id} className='muted-text'>{label}</label>}

            <select id={id} className={`form-input px-3 py-2 rounded-lg outline-none duration-200 w-full ${className}`} {...props} ref={ref}>
                
                {options?.map((option) =>
                    <option value={option} key={option}>
                        {option}
                    </option>)}
            </select>
        </div>
    )
}

export default forwardRef(Select) 
