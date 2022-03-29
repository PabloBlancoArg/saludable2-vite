import { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Layout = () => {
  
  const [carrito, setCarrito] = useState([]);
  const [sumar, setSumar] = useState(0);
  const [ modalUser, setModalUser] = useState(false)
  const [ filtro, setFiltro ] = useState('')
  const [ productosFiltrados, setProductosFiltrados ] = useState([])



  useEffect(() => {
    if(filtro) {
      const productoFiltrado = productos.filter( producto => [producto.product_name, producto.price].join(" ").toLocaleLowerCase().includes(filtro.toLocaleLowerCase()))
      setProductosFiltrados(productoFiltrado)
    }
  }, [filtro])
  return (
    <>
      <Header
        modalUser={modalUser}
        setModalUser={setModalUser}
        filtro={filtro}
        setFiltro={setFiltro}
      />
      <Outlet/>
      <Footer />
    </>
  );
};

export default Layout;
