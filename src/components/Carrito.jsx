import ListaProductosCarrito from "./ListaProductosCarrito";

const Carrito = ({ carrito, setCarrito, sumar, setSumar }) => {
  
  return (
    <>
      <div className="items-center py-4 px-2 text-green-700">
        Productos: { carrito.length === 0 ? ('No') : (<ListaProductosCarrito carrito={carrito} setCarrito={setCarrito}/>) }
        <p>Sub Total: {carrito.length === 0 ? "Vacio" : (sumar)}</p>
      </div>
    </>
  );
};

export default Carrito;
