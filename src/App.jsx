import { useState, useEffect } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import './App.css'
import ListadoProductos from './components/ListadoProductos'

function App() {

  const [productos, setProductos] = useState([
    {
      id:1,
      product_name:'Brocoli',
      price:120,
      currency:"$",
      thumb: "https://res.cloudinary.com/sivadass/image/upload/v1493620046/dummy-products/broccoli.jpg"
  },

  {
      id:2,
      product_name:'Zapallo',
      price:90,
      currency:"$",
      thumb: "https://res.cloudinary.com/sivadass/image/upload/v1493620045/dummy-products/pumpkin.jpg"
  },

  {
      id:3,
      product_name:'Cebolla',
      price:40,
      currency:"$",
      thumb: "https://res.cloudinary.com/sivadass/image/upload/v1493620045/dummy-products/onion.jpg"
  },
  {
      id:4,
      product_name:'Brocoli Frances',
      price:100,
      currency:"$",
      thumb: "https://res.cloudinary.com/sivadass/image/upload/v1493620046/dummy-products/broccoli.jpg"
  },

  {
      id:5,
      product_name:'Zapallo Koreano',
      price:97,
      currency:"$",
      thumb: "https://res.cloudinary.com/sivadass/image/upload/v1493620045/dummy-products/pumpkin.jpg"
  },

  {
      id:6,
      product_name:'Cebolla Ukraniana',
      price:45,
      currency:"$",
      thumb: "https://res.cloudinary.com/sivadass/image/upload/v1493620045/dummy-products/onion.jpg"
  }


  ])

  const [carrito, setCarrito] = useState([])

  const [ sumar, setSumar ] = useState(0)

  const [filtro, setFiltro] = useState('')
  const [productosFiltrados, setProductosFiltrados] = useState([])

  useEffect(() => {
    setSumar(() => 
      (carrito.reduce(function (ant,act) { return ant + act.price}, 0)), [])
  })

  useEffect(() => {
    if(filtro) {
      const productoFiltrado = productos.filter( producto => producto.product_name === filtro)
      setProductosFiltrados(productoFiltrado)
    }
  }, [filtro])


  return (
    <>
      <Header 
        carrito={carrito}
        setCarrito={setCarrito}
        sumar={sumar}
        setSumar={setSumar}
        filtro={filtro}
        setFiltro={setFiltro}
      />
      <ListadoProductos 
        productos={productos}
        filtro={filtro}
        productosFiltrados={productosFiltrados}
        carrito={carrito}
        setCarrito={setCarrito}
      />
       
      <Footer />
       

        
    </>
  )
}

export default App
