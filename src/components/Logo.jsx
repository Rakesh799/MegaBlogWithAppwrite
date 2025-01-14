import React from 'react'

const Logo = () => {
  return (
    <div className='w-14 flex items-center '>
      <img src="logo.png" alt="LOGO" />
      <img src="two.png" alt="LOGO2" className='md:visible hidden'/>
    </div>
  )
}

export default Logo
