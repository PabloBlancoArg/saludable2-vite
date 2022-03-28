import React from 'react'
import { Link } from 'react-router-dom'

const Inicio = () => {
  return (
    <div className=''>
       <h1>Lista de Organizaciones</h1>
       <hr/>
        <table className='table-auto'>
            <thead>
                <tr>
                    <th>Nombre</th>
                </tr>
                
            </thead>
            <tbody>
                <tr>
                    <td>
                    <Link className='' to="/o/tienda">Scandinavian Furniture</Link>
                    </td>
                </tr>
            </tbody>
           
        </table>
    </div>
  )
}

export default Inicio