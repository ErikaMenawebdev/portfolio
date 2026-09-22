import Navbar from './components/Navbar'
import Inicio from './components/Inicio'
import SobreMi from './components/SobreMi'
import Enfoque from './components/Enfoque'
import Servicios from './components/Servicios'
import Skills from './components/Skills'
import Proyectos from './components/Proyectos'
import Proceso from './components/Proceso'
import Formacion from './components/Formacion'
import Contacto from './components/Contacto'
import './App.css'

function App() {
  return (
    <>
      <Navbar />

      <main className="container">
        <Inicio />
        <SobreMi />
        <Enfoque />
        <Servicios />
        <Skills />
        <Proyectos />
        <Proceso />
        <Formacion />
        <Contacto />
      </main>
    </>
  )
}

export default App