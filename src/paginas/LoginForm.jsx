import React from 'react'
import { Link } from 'react-router-dom'

const LoginForm = () => {
  return (
    
    <div className='container mx-auto'>
       <h1>Ver Tiendas</h1>
        <Link to="/o" className='border-2 px-2 rounded-md bg-gray-300'>Tiendas</Link>
    </div>
  )
}

export default LoginForm