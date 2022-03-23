import React from "react";
import Producto from "./Producto";

const ListadoProductos = ({
  productos,
  carrito,
  setCarrito,
  filtro,
  productosFiltrados,
}) => {
  return (
    <div className="container mx-auto mt-6">
      <div className="grid grid-cols-6 ">
        <div className="container px-6 col-start-1 text-lg font-bold text-black max-w pb-2">
          <h1 className="font-bold mb-2">Categorias</h1>
          <ul className="list-disc pl-8 font-thin pb-2">
            <li className="pb-2">Living</li>
            <li className="pb-2">Oficina</li>
            <li className="pb-2">Cocina</li>
            <li className="pb-2">Habitacion</li>
          </ul>
          
          <hr className="py-4"/>
          <h1 className="mb-2">Filtrar Por</h1>
          <h3 className="text-sm">Muebles</h3>

          <label>
            <input className="checkbox"></input>
          </label>
        </div>

        <div className="col-span-5 px-6">
          <h3 className="text-lg font-bold text-black max-w pb-2">Productos</h3>
          <hr className=""/>

          <button className="border-2 flex my-4 py-1 rounded-md px-3 center text-sm">Ordenar por
            <svg className="w-3 h-5 ml-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M19 9l-7 7-7-7"></path></svg>
          </button>
          <div className="bg-white">
            <div className="">
              <div className="grid grid-cols-1 gap-y-5 sm:grid-cols-2 gap-x-5 lg:grid-cols-3 xl:grid-cols-3 xl:gap-x-5">
            {filtro
              ? productosFiltrados.map((producto) => (
                  <Producto
                    key={producto.id}
                    producto={producto}
                    carrito={carrito}
                    setCarrito={setCarrito}
                    productos={productos}
                  />
                ))
              : productos.map((producto) => (
                  <Producto
                    key={producto.id}
                    producto={producto}
                    carrito={carrito}
                    setCarrito={setCarrito}
                    productos={productos}
                  />
                ))}
          </div>
        </div>
        </div>
        </div>
      </div>
    </div>
  );
};

export default ListadoProductos;
