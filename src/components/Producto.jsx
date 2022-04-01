import { useState, useContext } from "react";
import { Link } from 'react-router-dom'
import StoreContext from "../context/StoreProvider";

const Producto = ({producto}) => {
  const { product_name, price, thumb, currency, category, id } = producto;
  const { agregarCart } = useContext(StoreContext)

  return (
    <div key={id} className='group'>
      <div className="w-full aspect-w-1 aspect-h-1 bg-white border-2 shadow-lg rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8">
        <Link to="#">
          <img src={thumb} className="w-full h-full object-center object-cover group-hover:opacity-75" />
        </Link>
        <hr/>
        <div className="p-4">
          <div className="">
            <span className="font-thin text-sm mb-2 text-gray-400">
              {category}
            </span>
            <h4 className="font-bold text-xl mb-2 text-gray-800">
              {product_name}
            </h4>
            <div className="flex text-xl">
              <p className="text-[24px] text-gray-800 font-semibold">{currency}</p>
              <p className="text-[24px] left text-gray-800 font-semibold">{price}</p>
            </div>
            
          </div>

            <div className="flex space-x-6">
              <button
                className="mt-2 basis-1/2 bg-black  py-2 text-center text-white rounded-lg hover:bg-gray-700  hover:bg-background-gray-400"
                type="button"
                
              >
                Comprar
              </button>

              <button
                className="mt-2 basis-1/2 bg-white font-bold border-2 py-2 text-center text-gray-900 rounded-lg hover:bg-gray-200  hover:bg-background-gray-400"
                type="button"
                onClick={() => agregarCart(producto)}
              >
                Agregar al carrito
              </button>
            </div>
          </div>
        </div>
      </div>
  );
};

export default Producto;
