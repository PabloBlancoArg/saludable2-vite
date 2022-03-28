import { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Layout = () => {
  
  const [carrito, setCarrito] = useState([]);
  const [sumar, setSumar] = useState(0);
  const [modalCarrito, setModalCarrito] = useState(false);
  const [ modalUser, setModalUser] = useState(false)
  const [ filtro, setFiltro ] = useState('')
  const [ productosFiltrados, setProductosFiltrados ] = useState([])


  useEffect(() => {
    setSumar(() => 
      (carrito.reduce(function (ant,act) { return ant + act.price}, 0)), [])
  })

  useEffect(() => {
    if(filtro) {
      const productoFiltrado = productos.filter( producto => [producto.product_name, producto.price].join(" ").toLocaleLowerCase().includes(filtro.toLocaleLowerCase()))
      setProductosFiltrados(productoFiltrado)
    }
  }, [filtro])
  return (
    <>
      <Header
        carrito={carrito}
        setCarrito={setCarrito}
        modalCarrito={modalCarrito}
        setModalCarrito={setModalCarrito}
        modalUser={modalUser}
        setModalUser={setModalUser}
        sumar={sumar}
        setSumar={setSumar}
        filtro={filtro}
        setFiltro={setFiltro}
      />
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;
