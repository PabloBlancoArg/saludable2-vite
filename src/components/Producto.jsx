import { useState } from 'react';
import React from 'react'

const Producto = ({producto, carrito, setCarrito, productos}) => {

  const { product_name, price, thumb,currency, id} = producto
  const [cantidad, setCantidad] = useState(1);
  const [ isSelected, setIsSelected] = useState(false)

  const addProducto = (id) => {
    const producto = productos.filter((producto) => producto.id === id);
    setCarrito([...carrito, ...producto]);
    setIsSelected(true)
  }

  const delProducto = (id) => {
    const productos = carrito.filter((producto) => producto.id !== id)
    setCarrito(productos)
  }


  const aumentaCantidad = () => {
    setCantidad(cantidad + 1);
  };

  const restaCantidad = () => {
    cantidad > 0 ? setCantidad(cantidad - 1) : null;
  };



  return (
    <div key={id}>
      <div className="bg-white shadow-xl rounded-md overflow-hidden">
        <div className="relative">
          <img src={thumb} className="w-full"></img>
          <div className="flex items-center justify-center gap-2">
            <a href="#" className="text-black-300"></a>
          </div>
        </div>

        <div className="pt-4 pb-3 px-4">
          <a href="#">
            <h4 className="uppercase text-center font-medium text-xl mb-2 tex-gray-800">
              {product_name}
            </h4>
          </a>
          <div className="flex items-baseline mb-1 space-x-2 justify-center">
          <p className="text-xl text-gray-800 font-semibold">{isSelected}</p>
            <p className="text-xl text-gray-800 font-semibold">{currency}</p>
            <p className="text-xl text-gray-800 font-semibold">{price}</p>
          </div>

          <div className="">
            <div className="flex items-baseline mb-1 space-x-4 justify-center">
              <a
                onClick={restaCantidad}
                className="block justify-center bg-green-300 font-bold py-1 px-3 text-center text-gray-900 rounded-full hover:bg-green-500 "
              >
                -
              </a>
              <input
                type="number"
                placeholder={cantidad}
                className="block w-20 border-2 rounded-lg text-center font-bold pl-4 "
              />
              <a
                onClick={aumentaCantidad}
                className="block justify-center bg-green-300 font-bold py-1 px-3 text-center text-gray-900 rounded-full hover:bg-green-500  hover:bg-background-gray-40"
              >
                +
              </a>
            </div>
            <button
              className="w-full justify-center mt-2 bg-green-300 font-bold py-1 px-3 text-center text-gray-900 rounded-full hover:bg-green-500  hover:bg-background-gray-40"
              type="button"
              onClick={() => addProducto(id)}
              >
              Agregar al carrito
           </button>

           <button
              className="w-full justify-center mt-2 bg-green-300 font-bold py-1 px-3 text-center text-gray-900 rounded-full hover:bg-green-500  hover:bg-background-gray-40"
              type="button"
              onClick={() => delProducto(id)}
              >
              borrar del carrito
           </button>
          </div>

          
        </div>
      </div>
    </div>
  )
}

export default Producto