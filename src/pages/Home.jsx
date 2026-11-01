import { Link } from 'react-router-dom'

function Home() {
    return (
      <section className="hero-section">
        <div className="hero-content">
  
          <span className="hero-label">
            FORMACIÓN PARA DOCENTES
          </span>
  
          <h2>
            Tecnología <br />
            <span>con Sentido</span>
          </h2>
  
          <p>
            Cursos y recursos para enseñar, crear e innovar
            en el aula con tecnología, de manera simple,
            práctica y con propósito.
          </p>
  
          <Link to="/productos" className="hero-button">
            Explorar cursos →
          </Link>
  
        </div>
      </section>
    )
  }
  
  export default Home