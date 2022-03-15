import Carrito from './Carrito'
import Filtros from './Filtros'

const Header = ({carrito, setCarrito, sumar, setSumar, filtro, setFiltro}) => {
  return (
    <nav className="bg-gray-100 shadow-xl">
        <div className='max-w-5xl mx-auto mb-5'>
            <div className='flex justify-between'>

                <div className='flex space-x-4'>
                    <div className='flex items-center space-x-1'>
                        <a href='#' className='flex items-center py-4 px-2 text-green-700'>
                          
                        <span className='text-lg font-bold italic'>Tiendita</span>  
                        </a>
                    </div>
                </div>
                    
                
                <Filtros
                    filtro={filtro}
                    setFiltro={setFiltro}    
                />
                <Carrito 
                    carrito={carrito}
                    setCarrito={setCarrito}
                    sumar={sumar}
                    setSumar={setSumar}
                />
                
            </div>
        </div>
        
        
    </nav>
  )
}

export default Header