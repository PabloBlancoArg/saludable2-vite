import { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ModalCarrito from "../components/ModalCarrito";
import "../App.css";
import ListadoProductos from "../components/ListadoProductos";

const LayoutTienda = () => {
  const [productos, setProductos] = useState([
    {
      id: 1,
      product_name: "Brocoli",
      price: 5120,
      currency: "$",
      category: "Living",
      qty: 0,
      thumb:
        "https://res.cloudinary.com/sivadass/image/upload/v1493620046/dummy-products/broccoli.jpg",
    },

    {
      id: 2,
      product_name: "Zapallo",
      price: 590,
      currency: "$",
      category: "Living",
      qty: 0,
      thumb:
        "https://res.cloudinary.com/sivadass/image/upload/v1493620045/dummy-products/pumpkin.jpg",
    },

    {
      id: 3,
      product_name: "Cebolla",
      price: 540,
      currency: "$",
      category: "Living",
      qty: 0,
      thumb:
        "https://res.cloudinary.com/sivadass/image/upload/v1493620045/dummy-products/onion.jpg",
    },
    {
      id: 4,
      product_name: "Brocoli Frances",
      price: 5100,
      currency: "$",
      category: "Living",
      qty: 0,
      thumb:
        "https://res.cloudinary.com/sivadass/image/upload/v1493620046/dummy-products/broccoli.jpg",
    },

    {
      id: 5,
      product_name: "Zapallo Koreano",
      price: 597,
      currency: "$",
      category: "Living",
      qty: 0,
      thumb:
        "https://res.cloudinary.com/sivadass/image/upload/v1493620045/dummy-products/pumpkin.jpg",
    },

    {
      id: 6,
      product_name: "Cebolla Ukraniana",
      price: 545,
      currency: "$",
      category: "Living",
      qty: 0,
      thumb:
        "https://res.cloudinary.com/sivadass/image/upload/v1493620045/dummy-products/onion.jpg",
    },
  ]);

  const [carrito, setCarrito] = useState([]);
  const [sumar, setSumar] = useState(0);
  const [modalCarrito, setModalCarrito] = useState(false);
  const [modalUser, setModalUser] = useState(false);
  const [filtro, setFiltro] = useState("");
  const [productosFiltrados, setProductosFiltrados] = useState([]);

  useEffect(() => {
    setSumar(
      () =>
        carrito.reduce(function (ant, act) {
          return ant + act.price;
        }, 0),
      []
    );
  });

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
      <div className="py-[200px] bg-left-top bg-cover bg-no-repeat bg-[url('/src/assets/images/bannerDesktop.png')]">
        <h1 className="inline ml-10 px-[100px] uppercase text-lg font-bold">
          20 años construyendo
        </h1>
        <h1 className="ml-10 px-[100px] uppercase text-lg font-bold">
          el hogar de tus sueños
        </h1>
        <Outlet />
      </div>

      <ListadoProductos
        productos={productos}
        filtro={filtro}
        productosFiltrados={productosFiltrados}
        carrito={carrito}
        setCarrito={setCarrito}
      />
      {modalCarrito && (
        <ModalCarrito
          setModalCarrito={setModalCarrito}
          modalCarrito={modalCarrito}
          carrito={carrito}
        />
      )}
    </>
  );
};

export default LayoutTienda;
