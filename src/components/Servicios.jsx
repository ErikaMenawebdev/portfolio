import { Code2, Globe, Palette } from 'lucide-react'

function Servicios() {
  return (
    <section id="servicios">
      <h2>Servicios</h2>

      <div className="services-container">

        <article className="service-card">
          <Code2 className="service-icon" />
          <h3>Desarrollo web</h3>

          <ul>
            <li>Desarrollo de interfaces con React</li>
            <li>Desarrollo de aplicaciones web</li>
            <li>Integración de APIs REST</li>
            <li>Desarrollo backend con Node.js y Express</li>
            <li>Implementación de bases de datos MongoDB</li>
          </ul>
        </article>

        <article className="service-card">
          <Globe className="service-icon" />
          <h3>WordPress y sitios web</h3>

          <ul>
            <li>Creación y actualización de sitios WordPress</li>
            <li>Diseño y edición con Elementor</li>
            <li>Administración de sitios web</li>
            <li>Actualización de contenido</li>
          </ul>
        </article>

        <article className="service-card">
           <Palette className="service-icon" />
          <h3>Diseño y contenido digital</h3>

          <ul>
            <li>Diseño de piezas para redes sociales</li>
            <li>Flyers y material promocional</li>
            <li>Edición de video</li>
            <li>Creación de reels</li>
            <li>Adaptación de contenido para medios digitales</li>
          </ul>
        </article>

      </div>
    </section>
  )
}

export default Servicios