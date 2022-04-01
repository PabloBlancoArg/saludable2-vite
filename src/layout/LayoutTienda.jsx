import { useState, useEffect, useContext } from "react";
import { Outlet } from "react-router-dom";
import StoreContext from "../context/StoreProvider";
import "../App.css";
import ListadoProductos from "../components/ListadoProductos";

const LayoutTienda = () => {

  const { cart, setCart, productos, filtro, setSumar } = useContext(StoreContext)

  const [modalCarrito, setModalCarrito] = useState(false);
  const [productosFiltrados, setProductosFiltrados] = useState([]);


  useEffect(() => {
    if (filtro) {
      const productoFiltrado = productos.filter((producto) =>
        [producto.product_name, producto.price]
          .join(" ")
          .toLocaleLowerCase()
          .includes(filtro.toLocaleLowerCase())
      );
      setProductosFiltrados(productoFiltrado);
    }
  }, [filtro]);

  return (
    <>
      <div className="py-[175px] bg-left-top bg-cover bg-no-repeat bg-[url('/src/assets/images/bannerDesktop.png')]">
        <h1 className="container mx-auto uppercase text-lg font-bold">
          20 años construyendo
        </h1>
        <h1 className="container mx-auto uppercase text-lg font-bold">
          el hogar de tus sueños
        </h1>
        <Outlet />
      </div>
     
      <ListadoProductos
        productos={productos}
        filtro={filtro}
        productosFiltrados={productosFiltrados}
        cart={cart}
        setCart={setCart}
      />
      {modalCarrito && (
        <modalCarrito
          setModalCarrito={setModalCarrito}
          modalCarrito={modalCarrito}
          cart={cart}
        />
      )}
    </>
  );
};

export default LayoutTienda;
