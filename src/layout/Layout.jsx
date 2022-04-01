import { useState, useEffect, useContext } from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import StoreContext from "../context/StoreProvider";

const Layout = () => {
  
  const [ modalUser, setModalUser] = useState(false)
  
  const { productos, filtro, setFiltro, productoFiltrado, setProductosFiltrados } = useContext(StoreContext)


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
