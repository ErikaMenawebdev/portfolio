import {
  MessageCircle,
  MonitorSmartphone,
  Palette,
  CodeXml
} from 'lucide-react'

function Enfoque() {
  return (
    <section id="enfoque">
      <h2>Mi enfoque</h2>

      <div className="approach-container">

        <article className="approach-card">
              <MessageCircle className="approach-icon" />
          <h3>Comunicación directa</h3>
          <p>
            Mantengo una comunicación clara durante el desarrollo para
            entender las necesidades del proyecto y mantener informado
            al cliente sobre su avance.
          </p>
        </article>

        <article className="approach-card">
            <MonitorSmartphone className="approach-icon" />
          <h3>Experiencia responsive</h3>
          <p>
            Desarrollo interfaces que se adaptan a diferentes tamaños
            de pantalla, buscando una buena experiencia tanto en
            computadores como en dispositivos móviles.
          </p>
        </article>

        <article className="approach-card">
            <Palette className="approach-icon" />
          <h3>Diseño adaptado</h3>
          <p>
            Adapto la interfaz y el contenido a las necesidades de cada
            proyecto, buscando una presentación clara, funcional y
            coherente con su propósito.
          </p>
        </article>

        <article className="approach-card">
            <CodeXml className="approach-icon" />
          <h3>Base mantenible</h3>
          <p>
            Busco construir proyectos con una estructura organizada y
            código comprensible, facilitando futuras modificaciones,
            mejoras y mantenimiento.
          </p>
        </article>

      </div>
    </section>
  )
}

export default Enfoque