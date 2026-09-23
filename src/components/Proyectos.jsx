function Proyectos() {
  return (
    <section id="proyectos">

      <h2>Proyectos</h2>

      <div className="projects-container">      

      <article className="project-card">
        <h3>Evolution Fitness Gym</h3>

       <p>
            Aplicación web Full Stack desarrollada para digitalizar la gestión
            administrativa de un gimnasio y centralizar la información de
            clientes, planes, inscripciones y pagos.
        </p>

        <p>
            Incluye autenticación mediante JWT y un dashboard administrativo
            para consultar y administrar la información del gimnasio.
        </p>

        <p>
            <strong>Tecnologías:</strong> React, Vite, Node.js, Express,
            MongoDB, Mongoose, JWT, bcrypt, Axios y Tailwind CSS.
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
            Portafolio desarrollado para presentar trabajos realizados durante
            mi formación como Tecnóloga en Desarrollo Multimedia y Web.
        </p>

        <p>
            Incluye proyectos de diseño gráfico y contenido multimedia, como
            flyers, banners y reels animados.
         </p>

         <p>
            <strong>Herramientas:</strong> WordPress, Elementor, Canva,
            Adobe Illustrator, Adobe Photoshop, CapCut y Adobe Premiere Pro.
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