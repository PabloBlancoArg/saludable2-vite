import React from 'react'
import TrashIcon from '../assets/TrashIcon'

const ItemCart = () => {
  return (
    <>
        <div>
        <div className="flex justify-between px-4">
            <div className="max-w-xs rounded-lg my-4 shadow-lg flex ">
              <img
                className="w-full"
                src="https://res.cloudinary.com/sivadass/image/upload/v1493620046/dummy-products/broccoli.jpg"
                alt="Sunset in the mountains"
              />
              <div className="px-4"></div>
              <p className="text-xl pt-8 font-bold whitespace-nowrap ">Brocoli Escandinavo</p>
            </div>
            
            <div>
              <div className="flex items-center space-x-6 py-10 px-4">
                <div className="border-solid border-2 px-2 rounded-md">-</div>
                <p>0</p>
                <div className="border-solid border-2 px-2 rounded-md">+</div>
                <h1 className="text-[25px]">$5000</h1>
                <button><TrashIcon /></button>
              </div>
            </div>
          </div>          
        </div>
        
    </>
  )
}

export default ItemCart