import React from 'react'

const ModalCarrito = ({setModalCarrito, ModalCarrito, carrito}) => {
  return (
    <div className="flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              <div className="border-0 rounded-md shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                <div className="flex items-start bg-gray-200 justify-center p-5 border-b border-solid border-gray-300 rounded-t ">
                  <h3 className="text-3xl font-bold text-green-700 italic ">Carrito</h3>
                  <button
                    className="bg-transparent border-0 text-black float-right"
                    onClick={() => setModalCarrito(false)}
                  >
                  </button>
                </div>
                <div className="relative p-6 flex-auto bg-green-700">
                  <form className="bg-white shadow-md rounded ">
                    {carrito.map((producto) => (
                        <div className='py-4 flex shadow-md justify-between items-center px-4 w-full'>
                            <div className='flex items-center'>
                                <img src={producto.thumb} className="w-10 flex"></img>
                                <label className='px-2 font-bold text-lg'>{producto.product_name}</label>
                                <label className='font-italic font-bold'>{producto.currency}</label>
                                <label className='font-bold text-lg'>{producto.price}</label>
                                <label className='px-4 text-lg font-bold'>Cantidad: 1</label>
                            </div>
                            
                            <button className='px-3 text-lg font-bold hover:shadow-md bg-red-500 rounded-md'>X</button>
                        </div>
                    
                        
        
                        )
                    )}
                  </form>
                </div>
                <div className="flex items-center justify-evenly bg-gray-200 p-6 border-t border-solid border-blueGray-200 rounded-b">
                  <button
                    className="text-red-500  rounded-md bg-white border font-bold uppercase px-6 py-3 text-sm hover:shadow-md outline-none focus:outline-none mr-1 mb-1"
                    type="button"
                    onClick={() => setModalCarrito(false)}
                  >
                    Cerrar
                  </button>
                  <button
                    className="text-white bg-green-700 active:bg-green-200 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
                    type="button"
                    onClick={() => setModalCarrito(false)}
                  >
                    Finalizar Compra
                  </button>
                </div>
              </div>
            </div>
          </div>
  )
}

export default ModalCarrito