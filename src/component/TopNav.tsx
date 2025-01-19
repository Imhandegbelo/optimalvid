import React from 'react'
import { Link } from 'react-router-dom'

const TopNav: React.FC = () => {
  return (
    <nav className='flex'>
      <Link to="/" className='font-black font-3xl'>Optimal<span className='text-rose-700'>Vid</span></Link>
    </nav>
  )
}

export default TopNav
