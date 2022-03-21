import LogoIcon from '../assets/LogoIcon'
import MenuIcon from '../assets/MenuIcon'
import Carrito from './Carrito'
import Filtros from './Filtros'

const Header = ({carrito, setCarrito, sumar, setSumar, filtro, setFiltro, modalCarrito, setModalCarrito}) => {
  return (
    <nav className="bg-white shadow-xl">
        <div className='max-w px-8'>
            <div className='flex justify-between'>

                <div className='flex space-x-4'>
                    <div className='flex items-center space-x-1'>
                        <a href='#' className='flex items-center py-4 px-8 text-green-700'>
    
                        <span className='text-lg'><MenuIcon/></span>  
                        </a>
                    </div>
                </div>
                    
                <div>
                    <a href='#' className='block items-center pl-10 py-4 text-black-700'>
                        <span className='center'><LogoIcon/></span>  
                    </a>
                </div>
                <div className='flex'>
                <Filtros
                    filtro={filtro}
                    setFiltro={setFiltro}    
                />
                <Carrito 
                    carrito={carrito}
                    setCarrito={setCarrito}
                    sumar={sumar}
                    setSumar={setSumar}
                    setModalCarrito={setModalCarrito}
                    modalCarrito={modalCarrito}
                />
                </div>
                
            </div>
        </div>
        
        
    </nav>
  )
}

export default Header