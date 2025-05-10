import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-content">
        {/* Primera fila con 3 columnas */}
        <div className="footer-row">
          {/* Columna del logo */}
          <div className="footer-column">
            <img src="images/logo.jpg" alt="Logo" className="footer-logo" />
          </div>

          {/* Columna de contacto */}
          <div className="footer-column">
            <h3 className="footer-title">Contacto</h3>
            <ul className="footer-list">
              <li>
                <a href="tel:+56 9 9012 2012" className="footer-link">
                  <FontAwesomeIcon icon="phone" /> +56 9 9012 2012
                </a>
              </li>
              <li>
                <a href="mailto:contacto@kctus.cl" className="footer-link">
                  <FontAwesomeIcon icon="envelope" /> contacto@kctus.cl
                </a>
              </li>
              <li>
                <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer" className="footer-link">
                  <FontAwesomeIcon icon="map-marker-alt" /> Las palmas 5875, La Florida
                </a>
              </li>
            </ul>
          </div>

          {/* Columna de redes sociales */}
          <div className="footer-column">
            <h3 className="footer-title">Síguenos</h3>
            <div className="social-links">
              <a href="https://www.facebook.com/people/Kctus-Gestión-SpA/100063507849215/" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <FontAwesomeIcon icon={['fab', 'facebook-f']} />
              </a>
              <a href="https://www.linkedin.com/in/kctus-gestión-spa-5702921b4/?originalSubdomain=cl" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <FontAwesomeIcon icon={['fab', 'linkedin-in']} />
              </a>
            </div>
          </div>
        </div>

        {/* Segunda fila con copyright */}
        <div className="footer-copyright">
          <p>&copy; {currentYear} Kctus Gestion SpA. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;