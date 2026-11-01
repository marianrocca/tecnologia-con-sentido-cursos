import NavBar from './NavBar'

function Header() {
  return (
    <header className="header">
      <div className="header-container">

        <div className="logo">
          <h1>Tecnología <span>con Sentido</span></h1>
          <p>Formación docente con propósito</p>
        </div>

        <NavBar />

      </div>
    </header>
  )
}

export default Header