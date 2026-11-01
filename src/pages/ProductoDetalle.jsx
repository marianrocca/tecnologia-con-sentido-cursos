import { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { useCart } from '../context/CartContext'

function ProductoDetalle() {
  const { id } = useParams()
  const { addToCart } = useCart()

  const [producto, setProducto] = useState(null)

  useEffect(() => {
    fetch('/productos.json')
      .then((respuesta) => {
        if (!respuesta.ok) {
          throw new Error('No se pudieron cargar los cursos')
        }

        return respuesta.json()
      })
      .then((datos) => {
        const cursoEncontrado = datos.find(
          (curso) => curso.id === Number(id)
        )

        setProducto(cursoEncontrado)
      })
      .catch((error) => {
        console.error(error)
      })
  }, [id])

  if (!producto) {
    return <p>Cargando curso o curso no encontrado...</p>
  }

  return (
    <section className="detalle-curso">
      <h2>{producto.nombre}</h2>

      <img
        src={producto.imagen}
        alt={`Portada del curso ${producto.nombre}`}
        className="detalle-imagen"
      />

      <p>{producto.descripcion}</p>

      <p>Duración: {producto.duracion}</p>

      <p>Categoría: {producto.categoria}</p>

      <p>Precio: ${producto.precio}</p>

      <button onClick={() => addToCart(producto)}>
  Agregar al carrito
</button>

      <br />

      <Link to="/productos">← Volver a los cursos</Link>
    </section>
  )
}

export default ProductoDetalle