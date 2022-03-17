const Filtros = ({filtro, setFiltro}) => {
  return (
    <div className=' flex items-center space-x-1'>
        <form>
            <div className=' flex space-x-2'>
                <input
                  value={filtro}
                  onChange={e => setFiltro(e.target.value)}
                  className='px-4 rounded-md shadow-md text-green-700 border-2 text-center text-lg'
                  placeholder="Buscador por nombre..."
                >
                </input>
            </div>
        </form>
    </div>
  )
}

export default Filtros