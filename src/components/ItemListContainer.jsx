import { useEffect, useState } from 'react'
import Item from './Item'

function ItemListContainer() {
  const [productos, setProductos] = useState([])

  useEffect(() => {
    fetch('/productos.json')
      .then((respuesta) => {
        if (!respuesta.ok) {
          throw new Error('No se pudieron cargar los cursos')
        }

        return respuesta.json()
      })
      .then((datos) => {
        setProductos(datos)
      })
      .catch((error) => {
        console.error(error)
      })
  }, [])

  return (
    <section>
      <h2>Nuestros cursos</h2>

      <div className="productos-container">
        {productos.map((producto) => (
          <Item
            key={producto.id}
            {...producto}
          />
        ))}
      </div>
    </section>
  )
}

export default ItemListContainer