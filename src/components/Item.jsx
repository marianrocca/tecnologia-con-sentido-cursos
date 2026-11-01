import { Link } from 'react-router-dom'

function Item({ id, nombre, descripcion, precio, duracion, imagen }) {
  return (
    <article className="item">

      <img
        src={imagen}
        alt={`Portada del curso ${nombre}`}
        className="item-imagen"
      />

      <h3>{nombre}</h3>

      <p>{descripcion}</p>

      <p>Duración: {duracion}</p>

      <p>Precio: ${precio.toLocaleString('es-AR')}</p>

      <Link to={`/producto/${id}`}>
        Ver curso
      </Link>

    </article>
  )
}

export default Item