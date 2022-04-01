import { useState, useContext } from 'react'
import TrashIcon from '../assets/icons/TrashIcon'
import StoreContext from "../context/StoreProvider";

const ItemCart = ({producto}) => {

  const [ cantidad, setCantidad ] = useState(1)
  const { product_name, price, thumb, currency, category, id } = producto;
  const { cart, setCart, productos } = useContext(StoreContext)

  


  return (
    <>
        <div key={id}>
        <div className="flex justify-between px-4">
            <div className="max-w-xs rounded-lg my-4 shadow-lg flex ">
              <img
                className="w-full rounded-md"
                src={thumb}
                alt="item"
              />
              <div className="px-4 pt-8 whitespace-nowrap text-gray-700">
                <p className="text-xl pb-2 font-bold text-black">{product_name}</p>
                <p className="text-[14px] font-regular">Categoria: {category}</p>
                <p className="text-[14px] font-regular">Color: N/S</p>
              
              </div>
              
              
              
            </div>
              
            <div>
              <div className="flex items-center space-x-6 py-10 px-4">
                <div className="border-solid border-2 px-2 rounded-md">-</div>
                <p>{cantidad}</p>
                <div className="border-solid border-2 px-2 rounded-md">+</div>
                <h1 className="text-[25px]">{`${currency} ${price}`}</h1>
                <button ><TrashIcon /></button>
              </div>
            </div>
          </div>          
        </div>
        
    </>
  )
}

export default ItemCart