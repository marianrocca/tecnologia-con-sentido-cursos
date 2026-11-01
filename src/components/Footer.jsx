const equipo = [
  {
    id: 1,
    nombre: 'Mariana Rocca',
    rol: 'Fundadora y especialista en Educación Digital',
  },
  {
    id: 2,
    nombre: 'Equipo de formación',
    rol: 'Perfil demostrativo - Diseño pedagógico',
  },
  {
    id: 3,
    nombre: 'Equipo de tecnología',
    rol: 'Perfil demostrativo - Desarrollo de contenidos',
  },
]

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-info">
        <h2>Tecnología con Sentido</h2>
        <p>Formación docente con propósito.</p>
        <p>
          Un espacio para aprender, crear y transformar
          las prácticas educativas mediante la tecnología.
        </p>
      </div>

      <h3>Nuestro equipo</h3>

      <div className="footer-equipo">
        {equipo.map((persona) => (
          <article className="footer-card" key={persona.id}>
            <h4>{persona.nombre}</h4>
            <p>{persona.rol}</p>
          </article>
        ))}
      </div>

      <p className="footer-copy">
        © 2026 Tecnología con Sentido. Todos los derechos reservados.
      </p>
    </footer>
  )
}

export default Footer