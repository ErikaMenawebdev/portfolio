import { useState } from 'react'

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  const closeMenu = () => {
    setMenuOpen(false)
  }

  return (
    <nav className="navbar">
      <h2>Erika Mena</h2>

      <button
        className="menu-button"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'}
        aria-expanded={menuOpen}
      >
        {menuOpen ? '✕' : '☰'}
      </button>

      <ul className={`nav-links ${menuOpen ? 'menu-open' : ''}`}>
        <li>
          <a href="#inicio" onClick={closeMenu}>
            Inicio
          </a>
        </li>

        <li>
          <a href="#sobre-mi" onClick={closeMenu}>
            Sobre mí
          </a>
        </li>

        <li>
          <a href="#enfoque" onClick={closeMenu}>
            Mi enfoque
          </a>
        </li>

        <li>
          <a href="#servicios" onClick={closeMenu}>
            Servicios
          </a>
        </li>

        <li>
          <a href="#skills" onClick={closeMenu}>
            Skills
          </a>
        </li>

        <li>
          <a href="#proyectos" onClick={closeMenu}>
            Proyectos
          </a>
        </li>

        <li>
          <a href="#proceso" onClick={closeMenu}>
            Proceso
          </a>
        </li>

        <li>
          <a href="#formacion" onClick={closeMenu}>
            Formación
          </a>
        </li>

        <li>
          <a href="#contacto" onClick={closeMenu}>
            Contacto
          </a>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar