import { useState, useEffect } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import ModalCarrito from './components/ModalCarrito'
import './App.css'
import ListadoProductos from './components/ListadoProductos'

function App() {

  const [productos, setProductos] = useState([
    {
      id:1,
      product_name:'Brocoli',
      price:120,
      currency:"$",
      qty:0,
      thumb: "https://res.cloudinary.com/sivadass/image/upload/v1493620046/dummy-products/broccoli.jpg"
  },

  {
      id:2,
      product_name:'Zapallo',
      price:90,
      currency:"$",
      qty:0,
      thumb: "https://res.cloudinary.com/sivadass/image/upload/v1493620045/dummy-products/pumpkin.jpg"
  },

  {
      id:3,
      product_name:'Cebolla',
      price:40,
      currency:"$",
      qty:0,
      thumb: "https://res.cloudinary.com/sivadass/image/upload/v1493620045/dummy-products/onion.jpg"
  },
  {
      id:4,
      product_name:'Brocoli Frances',
      price:100,
      currency:"$",
      qty:0,
      thumb: "https://res.cloudinary.com/sivadass/image/upload/v1493620046/dummy-products/broccoli.jpg"
  },

  {
      id:5,
      product_name:'Zapallo Koreano',
      price:97,
      currency:"$",
      qty:0,
      thumb: "https://res.cloudinary.com/sivadass/image/upload/v1493620045/dummy-products/pumpkin.jpg"
  },

  {
      id:6,
      product_name:'Cebolla Ukraniana',
      price:45,
      currency:"$",
      qty:0,
      thumb: "https://res.cloudinary.com/sivadass/image/upload/v1493620045/dummy-products/onion.jpg"
  }


  ])

  const [ carrito, setCarrito ] = useState([])
  const [ sumar, setSumar ] = useState(0)
  const [ modalCarrito, setModalCarrito ] = useState(false)
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
        setModalCarrito={setModalCarrito}
        modalCarrito={modalCarrito}
        sumar={sumar}
        setSumar={setSumar}
        filtro={filtro}
        setFiltro={setFiltro}
      />
      <div className="py-[200px] bg-left-top bg-cover bg-no-repeat bg-[url('/src/assets/images/bannerDesktop.png')]">
        <h1 className='inline ml-10 px-[100px] uppercase text-lg font-bold'>20 AñOS CONSTRUYENDO</h1>
        <h1 className='ml-10 px-[100px] uppercase text-lg font-bold'>El HOGAR DE TUS SUEñOs</h1>
      </div>

      <ListadoProductos 
        productos={productos}
        filtro={filtro}
        productosFiltrados={productosFiltrados}
        carrito={carrito}
        setCarrito={setCarrito}
      />
      { modalCarrito && <ModalCarrito  
                          setModalCarrito={setModalCarrito}
                          modalCarrito={modalCarrito}
                          carrito={carrito}
                          />}
      <Footer />
       

        
    </>
  )
}

export default App
