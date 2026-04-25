import React from 'react'

const Logo = ({ width = "auto", textClassName = "text-white" }) => {
  return (
    <div style={{ width }} className='flex items-center'>
      <span className={`text-2xl font-extrabold tracking-wide md:text-3xl ${textClassName}`}>
        MegaBlog
      </span>
    </div>
  )
}

export default Logo
