import { Link } from 'react-router-dom'
import { useCart } from '../context/CartContext'

function Carrito() {
  const {
    carrito,
    cantidadTotal,
    addToCart,
    removeFromCart,
    decreaseQuantity
  } = useCart()

  const precioTotal = carrito.reduce(
    (total, producto) =>
      total + producto.precio * producto.cantidad,
    0
  )

  const formatoPrecio = (precio) =>
    precio.toLocaleString('es-AR')

  return (
    <section className="carrito">
      <h2>Mi carrito de cursos</h2>

      {carrito.length === 0 ? (
        <div className="carrito-vacio">
          <p>Tu carrito está vacío.</p>
          <Link to="/productos" className="boton-carrito">
            Explorar cursos
          </Link>
        </div>
      ) : (
        <div className="carrito-contenido">

          <div className="carrito-productos">
            {carrito.map((producto) => (
              <article
                className="carrito-item"
                key={producto.id}
              >
                <h3>{producto.nombre}</h3>

                <p>
                  Precio: ${formatoPrecio(producto.precio)}
                </p>

                <div className="controles-cantidad">
            <span>Cantidad:</span>

            <button
              type="button"
              onClick={() => decreaseQuantity(producto.id)}
              aria-label={`Quitar una unidad de ${producto.nombre}`}
            >
              −
            </button>

            <span>{producto.cantidad}</span>

            <button
              type="button"
              onClick={() => addToCart(producto)}
              aria-label={`Agregar una unidad de ${producto.nombre}`}
            >
              +
            </button>
          </div>

                <p className="carrito-subtotal">
                  Subtotal: $
                  {formatoPrecio(
                    producto.precio * producto.cantidad
                  )}
                </p>

                <button
            type="button"
            className="boton-eliminar"
            onClick={() => removeFromCart(producto.id)}
          >
            🗑️ Eliminar curso
          </button>
              </article>
            ))}
          </div>

          

          <aside className="carrito-resumen">
            <h3>Resumen de compra</h3>

            <p>Cursos seleccionados: {cantidadTotal}</p>

            <hr />

            <h3>
              Total: ${formatoPrecio(precioTotal)}
            </h3>

            <Link
              to="/productos"
              className="boton-carrito"
            >
              Seguir explorando cursos
            </Link>
          </aside>

        </div>
      )}
    </section>
  )
}

export default Carrito