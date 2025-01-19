import React from 'react'
import { Link } from 'react-router-dom'

const NotFound: React.FC =() =>{
  return (
    <div className='h-[400px] flex items-center'>
      <h1 className='text-3xl'>404</h1>
      <p>Page not found</p>
      <Link to="/"className='border border-transparent rounded py-2 px-4 hover:border-black'>Go back Home</Link>
    </div>
  )
}
export default NotFound