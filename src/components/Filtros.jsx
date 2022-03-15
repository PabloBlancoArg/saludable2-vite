import { useState, useEffect } from 'react'

const Filtros = () => {
  return (
    <div>
        <form>
            <div>
                <label>Buscar</label>
                <select>
                    <option value="">Seleccione</option>
                    <option value="cebolla">Cebolla</option>
                </select>
            </div>
        </form>
    </div>
  )
}

export default Filtros