import { Link } from 'react-router-dom'
import CartWidget from './CartWidget'

function NavBar() {
  return (
    <nav>
      <Link to="/">Inicio</Link>
      <Link to="/productos">Cursos</Link>
      <CartWidget />
    </nav>
  )
}

export default NavBar