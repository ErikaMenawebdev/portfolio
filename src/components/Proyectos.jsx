function Proyectos() {
  return (
    <section id="proyectos">

      <h2>Proyectos</h2>

      <div className="projects-container">      

      <article className="project-card">
        <h3>Evolution Fitness Gym</h3>

        <p>
          Aplicación web Full Stack para la gestión administrativa de un
          gimnasio, desarrollada como proyecto de aprendizaje y práctica
          profesional.
        </p>

        <p>
          Incluye gestión de clientes, planes, inscripciones, pagos,
          autenticación mediante JWT y un dashboard administrativo.
        </p>

        <p>
          Tecnologías: React, Vite, Node.js, Express, MongoDB, Mongoose,
          JWT, bcrypt, Axios y Tailwind CSS.
        </p>

        <a
          href="https://github.com/ErikaMenawebdev/Gym_Evolution_Fitness"
          target="_blank"
          rel="noopener noreferrer"
        >
          Ver proyecto en GitHub
        </a>
      </article>

      <article className="project-card">
        <h3>Portafolio Multimedial</h3>

        <p>
          Portafolio desarrollado para presentar diferentes trabajos
          realizados durante mi formación como Tecnóloga en Desarrollo
          Multimedia y Web.
        </p>

        <p>
          Incluye trabajos de diseño gráfico y elementos multimedia como
          flyers, banners y reels animados.
        </p>

        <p>
         Herramientas: WordPress, Elementor, Canva, Adobe Illustrator,
         Adobe Photoshop, CapCut y Adobe Premiere Pro.
        </p>

        <a
          href="https://menapa444-zvicl.wordpress.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Ver portafolio
        </a>
      </article>

      </div>
    </section>
  )
}

export default Proyectos