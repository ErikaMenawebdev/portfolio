function Contacto() {
  return (
    <section id="contacto">

      <div className="contact-container">

        <h2>¿Tienes un proyecto en mente?</h2>

        <p>
          Si necesitas una solución web, un sitio WordPress o apoyo
          con contenido digital, puedes contactarme para conversar
          sobre tu proyecto.
        </p>

        <div className="contact-links">

          <a
            href="https://wa.me/573205409036?text=Hola%20Erika%2C%20vi%20tu%20portafolio%20y%20estoy%20interesado%2Fa%20en%20conocer%20tus%20servicios."
            target="_blank"
            rel="noopener noreferrer"
          >
            Cotizar por WhatsApp
          </a>

          <a
            href="https://www.linkedin.com/in/erikamena-dev/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>

          <a
            href="https://github.com/ErikaMenawebdev"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>

        </div>

        <form
  className="contact-form"
  action="https://formspree.io/f/xkjgrkwg"
  method="POST"
>

          <div className="form-group">
            <label htmlFor="nombre">Nombre</label>
            <input
              type="text"
              id="nombre"
              name="nombre"
              placeholder="Tu nombre"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Correo electrónico</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="tu-correo@email.com"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="servicio">Servicio de interés</label>

            <select id="servicio" name="servicio" required>
              <option value="">Selecciona un servicio</option>
              <option value="desarrollo-web">Desarrollo web</option>
              <option value="wordpress">WordPress y sitios web</option>
              <option value="diseno-contenido">
                Diseño y contenido digital
              </option>
              
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="mensaje">Mensaje</label>

            <textarea
              id="mensaje"
              name="mensaje"
              rows="6"
              placeholder="Cuéntame brevemente sobre tu proyecto..."
              required
            ></textarea>
          </div>

          <button type="submit">
            Enviar solicitud
          </button>

        </form>

      </div>

    </section>
  )
}

export default Contacto