import ListaProductosCarrito from "./ListaProductosCarrito";

const Carrito = ({ carrito, setCarrito, sumar }) => {
  
  return (
    <>
      <div className="items-center py-4 px-2 text-green-700">
        <div className="flex">
        <p>Productos: { carrito.length === 0 ? (0) : (<ListaProductosCarrito carrito={carrito} setCarrito={setCarrito}/>) }</p>
        </div>
        <p>Sub Total: {carrito.length === 0 ? 0 : (sumar)}</p>
      </div>
    </>
  );
};

export default Carrito;
