import React from 'react'
import Producto from './Producto'

const ListadoProductos = ({ productos, carrito, setCarrito, filtro, productosFiltrados}) => {
  return (
    <div className="max-w-5xl mx-auto">
        <h3 className='text-lg font-bold text-green-700'>Productos</h3>
        <div className="grid grid-cols-4 gap-6">

        {   filtro ? (
                productosFiltrados.map((producto) => (
                    <Producto
                        key={producto.id}
                        producto={producto}
                        carrito={carrito}
                        setCarrito={setCarrito}
                        productos={productos}
                    />
                    ))
            ) : ((
                productos.map((producto) => (
                    <Producto
                        key={producto.id}
                        producto={producto}
                        carrito={carrito}
                        setCarrito={setCarrito}
                        productos={productos}
                    />
                    ))
            ))
        }
        </div>
        
    </div>
  )
}

export default ListadoProductos