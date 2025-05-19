import { useState, useEffect } from 'react';
import './Header.css';

const Header = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [activeSection, setActiveSection] = useState('inicio');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const heroSection = document.querySelector('.hero');
      if (heroSection) {
        setIsSticky(window.scrollY > heroSection.offsetHeight * 0.88);
      }

      const scrollPosition = window.scrollY + window.innerHeight * 0.3;
      const sections = ['inicio', 'servicios', 'nosotros', 'galeria', 'contacto'];
      let newActiveSection = activeSection;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const sectionTop = element.offsetTop;
          const sectionBottom = sectionTop + element.offsetHeight;
          
          if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
            newActiveSection = section;
            break;
          }
        }
      }

      if (newActiveSection !== activeSection) {
        setActiveSection(newActiveSection);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, [activeSection]);

  const handleClick = (sectionId, e) => {
    e.preventDefault();
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = isSticky ? 80 : 0;
      window.scrollTo({
        top: element.offsetTop - offset,
        behavior: 'smooth'
      });
      setActiveSection(sectionId);
      setIsMenuOpen(false); // Cerrar menú al seleccionar una opción
    }
  };

  const navItems = [
    { id: 'inicio', text: "Inicio" },
    { id: 'servicios', text: "Servicios" },
    { id: 'nosotros', text: "Nosotros" },
    { id: 'galeria', text: "Galería" },
    { id: 'contacto', text: "Contacto" }
  ];

  // En el return, modifica la estructura así:
return (
    <header className={`header ${isSticky ? 'sticky' : ''}`}>
      <div className="header-container">
        <div className="logo">
          <img src="images/logo.jpg" alt="Logo" className="logo-img" />
        </div>

        
        
        {/* Botón Hamburguesa */}
        <button 
          className={`hamburger ${isMenuOpen ? 'open' : ''}`} 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Menú"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        {/* Menú de navegación */}
        <nav className={`nav ${isMenuOpen ? 'open' : ''}`}>
          {/* Botón de cerrar fijo */}
          <button 
            className="close-menu" 
            onClick={() => setIsMenuOpen(false)}
            aria-label="Cerrar menú"
          >
            &times;
          </button>

          {/* Items de navegación */}
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={`nav-link ${activeSection === item.id ? 'active' : ''}`}
              onClick={(e) => handleClick(item.id, e)}
            >
              {item.text}
            </a>
          ))}
          
          {/* Botón Cotizar en móvil */}

          <button 
            className="quote-btn mobile-only"
            onClick={(e) => handleClick('contacto', e)}
          >
            Cotizar
          </button>

        </nav>

        {/* Botón Cotizar en desktop */}

        <button 
          className="quote-btn desktop-only"
          onClick={(e) => handleClick('contacto', e)}
        >
          Cotizar
        </button> 


      </div>
    </header>
  );
};


export default Header;