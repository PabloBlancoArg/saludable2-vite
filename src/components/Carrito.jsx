import ShoppingCart from "../assets/ShoppingCart";
import UserIcon from "../assets/UserIcon";
import ListaProductosCarrito from "./ListaProductosCarrito";

const Carrito = ({ carrito, setCarrito, sumar, modalCarrito, setModalCarrito }) => {

  const handleCarrito = () => {
    setModalCarrito(true)
  }
  
  return (
    <>
      <div className="items-center flex py-4 px-2 text-green-700">
        <button className="mr-2 px-2" onClick={handleCarrito}><UserIcon /></button>
        <button className="mr-2 px-2" onClick={handleCarrito}><ShoppingCart /></button>
      </div>
    </>
  );
};

export default Carrito;
