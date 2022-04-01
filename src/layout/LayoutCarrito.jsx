import { useState, useContext } from "react";
import { Link } from 'react-router-dom'
import EmptyCart from "../assets/illustrations/EmptyCart";
import ItemCart from "../components/ItemCart";
import StoreContext from "../context/StoreProvider";

const LayoutCarrito = () => {
  const { cart, setCart, productos, sumar, setSumar } =
    useContext(StoreContext);
  return (
    <>
      <div className="py-4 mt-4 container mx-auto">
        {cart.length > 0 ? (
          <>
            <h1 className="text-xl font-bold px-4 rounded-lg container mx-auto">
              Productos en tu carrito:
            </h1>
            <div className="rounded-lg ml-2 mt-4 border-2 shadow-sm">
              {cart.map((producto) => (
                <ItemCart key={producto.id} producto={producto} />
              ))}
            </div>
            <div className=" rounded-lg ml-2 mt-4 px-4 border-2 border-solid shadow-sm">
              <div className="flex justify-between items-center px-8 py-2">
                <div className="font-bold text-[22px]">Total</div>
                <div className="font-bold text-[25px]">$ {sumar}</div>
              </div>
            </div>
            <div className="justify-between flex container mx-auto pl-4 mt-4">
              <Link to="/o/tienda" className="block pt-4 text-blue-400">Continuar Comprando</Link>
              <button className="border-2 border-solid px-4 space-x-8 rounded-lg flex">
                <p>Ingresar codigo promocional</p>
                <p>+</p>
              </button>
            </div>
            <div className="container mx-auto px-4 mt-4">
              <button className="bg-black text-white text-sm py-2 rounded-md px-4">
                Finalizar la compra
              </button>
            </div>
          </>
        ) : (
          <EmptyCart />
        )}
      </div>
    </>
  );
};

export default LayoutCarrito;
