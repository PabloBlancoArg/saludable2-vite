import SearchIcon from "../assets/icons/SearchIcon"

const Filtros = ({filtro, setFiltro}) => {
  return (
    <div className=' flex items-center space-x-1'>
        <form>
            <div className='bg-white items-center flex space-x-2 px-2 border-2 border-gray-300 rounded-md'>
                <input
                  value={filtro}
                  onChange={e => setFiltro(e.target.value)}
                  className='px-2 py-1 rounded-md text-black-200 text-left text-sm text-md'
                  placeholder="Busqueda"
                >
                </input>
                <SearchIcon/>
            </div>
        </form>
    </div>
  )
}

export default Filtros