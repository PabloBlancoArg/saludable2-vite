const Filtros = ({filtro, setFiltro}) => {
  return (
    <div className=' flex items-center space-x-1'>
        <form>
            <div className=' flex space-x-2  '>
                <label className="font-bold italic text-lg text-green-700">Buscar</label>
                <input
                  value={filtro}
                  onChange={e => setFiltro(e.target.value)}
                  className='px-4 rounded-lg text-green-700 border-2 font-bold text-lg'
                >
                </input>
            </div>
        </form>
    </div>
  )
}

export default Filtros