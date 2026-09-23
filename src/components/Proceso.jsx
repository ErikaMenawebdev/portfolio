function Proceso() {
  return (
    <section id="proceso">
      <h2>Mi proceso de trabajo</h2>

      <div className="process-container">

        <article className="process-card">
          <span className="process-number">01</span>
          <h3>Conocemos el proyecto</h3>
          <p>
            Conozco las necesidades del proyecto, los objetivos y las
            funcionalidades requeridas.
          </p>
        </article>

        <article className="process-card">
          <span className="process-number">02</span>
          <h3>Definimos la solución</h3>
          <p>
            Defino la estructura, las tecnologías y las funcionalidades
            que tendrá la solución.
          </p>
        </article>

        <article className="process-card">
          <span className="process-number">03</span>
          <h3>Desarrollo</h3>
          <p>
            Construyo la solución aplicando buenas prácticas de desarrollo
            y realizando pruebas durante el proceso.
          </p>
        </article>

        <article className="process-card">
          <span className="process-number">04</span>
          <h3>Entrega</h3>
          <p>
             Presento el proyecto terminado y realizo los ajustes necesarios
            para su puesta en funcionamiento.
          </p>
        </article>

      </div>
    </section>
  )
}

export default Proceso