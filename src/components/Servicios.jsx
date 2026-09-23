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
            <li>Desarrollo de sitios y aplicaciones web</li>
            <li>Interfaces web con React</li>
            <li>Integración con APIs y servicios web</li>
            <li>Desarrollo backend con Node.js y Express</li>
            <li>Gestión de datos con MongoDB</li>
          </ul>
        </article>

        <article className="service-card">
          <Globe className="service-icon" />
          <h3>WordPress y sitios web</h3>

          <ul>
            <li>Creación y actualización de sitios en WordPress</li>
            <li>Diseño y edición de páginas con Elementor</li>
            <li>Administración y mantenimiento de sitios web</li>
            <li>Actualización y gestión de contenido</li>
          </ul>
        </article>

        <article className="service-card">
           <Palette className="service-icon" />
          <h3>Diseño y contenido digital</h3>

          <ul>
            <li>Diseño de contenido para redes sociales</li>
            <li>Creación de flyers y material promocional</li>
            <li>Edición de videos para medios digitales</li>
            <li>Creación y edición de reels</li>
            <li>Adaptación de contenido para diferentes formatos digitales</li>
          </ul>
        </article>

      </div>
    </section>
  )
}

export default Servicios