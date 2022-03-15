const ListaProductosCarrito = ({carrito, setCarrito, producto}) => {
  return (
    <p>
    { carrito.length < 0 ? ('0') :  (carrito.length) }
    </p>
  )
}

export default ListaProductosCarrito