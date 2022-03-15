import { useState, useEffect } from 'react'
import Producto from './components/Producto'
import Header from './components/Header'
import Footer from './components/Footer'
import Filtros from './components/Filtros'
import './App.css'

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
      product_name:'Brocoli',
      price:120,
      currency:"$",
      thumb: "https://res.cloudinary.com/sivadass/image/upload/v1493620046/dummy-products/broccoli.jpg"
  },

  {
      id:5,
      product_name:'Zapallo',
      price:90,
      currency:"$",
      thumb: "https://res.cloudinary.com/sivadass/image/upload/v1493620045/dummy-products/pumpkin.jpg"
  },

  {
      id:6,
      product_name:'Cebolla',
      price:40,
      currency:"$",
      thumb: "https://res.cloudinary.com/sivadass/image/upload/v1493620045/dummy-products/onion.jpg"
  }


  ])

  const [carrito, setCarrito] = useState([])

  const [ sumar, setSumar ] = useState(0)

  useEffect(() => {
    setSumar(() => 
      (carrito.reduce(function (ant,act) { return ant + act.price}, 0)), [])
  })



  return (
    <>
      <Header 
        carrito={carrito}
        setCarrito={setCarrito}
        sumar={sumar}
        setSumar={setSumar}
      />
      
        <div className="max-w-5xl mx-auto">
        <h3 className='text-lg font-bold text-green-700'>Productos</h3>
        <div className="grid grid-cols-4 gap-6">
        {productos.map((producto) => (
          <Producto
            key={producto.id}
            producto={producto}
            carrito={carrito}
            setCarrito={setCarrito}
            productos={productos}
          />
        ))}
          </div>
          <Footer />
        </div>
       

        
    </>
  )
}

export default App
