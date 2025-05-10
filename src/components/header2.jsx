import React from 'react';
import './header2.css';

const Header2 = () => {
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      window.scrollTo({
        top: section.offsetTop,
        behavior: 'smooth'
      });
    }
  };

  return (
    <header className="header-fixed">
      <nav className="nav">
        <ul className="nav-list">
          <li><button onClick={() => scrollToSection('inicio')}>Inicio</button></li>
          <li><button onClick={() => scrollToSection('servicios')}>Servicios</button></li>
          <li><button onClick={() => scrollToSection('nosotros')}>Nosotros</button></li>
          <li><button onClick={() => scrollToSection('galeria')}>Galería</button></li>
          <li><button onClick={() => scrollToSection('contacto')}>Contacto</button></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header2;