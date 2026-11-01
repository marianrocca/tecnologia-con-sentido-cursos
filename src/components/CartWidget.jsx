import { Link } from 'react-router-dom'
import { useCart } from '../context/CartContext'

function CartWidget() {
  const { cantidadTotal } = useCart()

  return (
    <Link to="/carrito">
      🛒 Carrito ({cantidadTotal})
    </Link>
  )
}

export default CartWidget