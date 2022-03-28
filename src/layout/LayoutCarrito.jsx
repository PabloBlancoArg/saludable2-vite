import React from "react";
import TrashIcon from "../assets/TrashIcon";

const LayoutCarrito = () => {
  return (
    <>
      <div className="py-4 mt-4 container mx-auto">
        <h1 className="text-xl font-bold px-4 rounded-lg container mx-auto">
          Productos en tu carrito:
        </h1>
        <div className="rounded-lg ml-2 mt-4 border-2 shadow-sm">
          <div className="flex justify-between px-4">
            <div class="max-w-xs rounded-lg my-4 shadow-lg flex ">
              <img
                class="w-full"
                src="https://res.cloudinary.com/sivadass/image/upload/v1493620046/dummy-products/broccoli.jpg"
                alt="Sunset in the mountains"
              />
              <div class="px-4"></div>
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
        <div className=" rounded-lg ml-2 mt-4 px-4 border-2 border-solid shadow-sm">
          <div className="flex justify-between items-center px-8 py-2">
            <div className="font-bold text-lg">Total</div>
            <div className="font-bold text-lg">$ 10000</div>
          </div>
        </div>
       <div className="justify-between flex container mx-auto pl-4 mt-4">
         <button className="text-blue-400">Continuar Comprando</button>
         <button className="border-2 border-solid px-4 space-x-8 rounded-lg flex">
           <p>Ingresar codigo promocional</p>
           <p>+</p>
         </button>
       </div>
       <div className="container mx-auto px-4 mt-4"> 
        <button className="bg-black text-white text-sm py-2 rounded-md px-4">Finalizar la compra</button>
       </div>
      </div>
    </>
  );
};

export default LayoutCarrito;
