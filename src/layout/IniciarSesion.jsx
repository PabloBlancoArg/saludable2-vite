import React from 'react'
import { Outlet } from 'react-router-dom'

const IniciarSesion = () => {
  return (
    <div className='py-2'>
        <Outlet />
    </div>
  )
}

export default IniciarSesion