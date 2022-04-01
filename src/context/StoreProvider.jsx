import { useState, useEffect, createContext } from 'react'

const StoreContext = createContext()

const StoreProvider = ({children}) => {


    const [ cart, setCart ] = useState([])
    const [ sumar, setSumar ] = useState(0);
    const [ filtro, setFiltro ] = useState('')
    const [ productosFiltrados, setProductosFiltrados ] = useState([])

    const agregarCart = (producto) => {
      if (cart.some((articulo) => articulo.id === producto.id)) {
        const cartActualizado = cart.map( articulo => {
          if(articulo.id === producto.id ) {
            articulo.cantidad = producto.cantidad
          }
          console.log('duplicado')
          return articulo
        })

        setCart(cartActualizado)
      } else {
        console.log('unico')
        setCart([...cart, producto])
      }

    }

    const delCart = (producto) => {
      if (cart.some((articulo) => articulo.id === producto.id)) {
        const cartActualizado = cart.map( articulo => {
          if(articulo.id === producto.id ) {
            
          }
          console.log('duplicado')
          return articulo
        })
        setCart(cartActualizado)
      } else {
        console.log('unico')
        setCart([...cart, producto])
      }
    }

    useEffect(() => {
        setSumar(
          () =>
            cart.reduce(function (ant, act) {
              return ant + act.price;
            }, 0),
          []
        );
      });
    

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

    return (
        <StoreContext.Provider
            value={{
                cart,
                setCart,
                sumar,
                setSumar,
                agregarCart,
                productos,
                filtro,
                setFiltro,
                productosFiltrados,
                setProductosFiltrados
            }}
        >
            {children}
        </StoreContext.Provider>
    )
}

export {
    StoreProvider
}

export default StoreContext