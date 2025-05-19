import React, { useEffect, useRef } from "react";
import './Nosotros.css';

// Array de logos (reemplaza con tus imágenes reales)
const clientLogos = [
  { id: 1, name: 'ADT', logo: 'images/empresas/adt.png' },
  { id: 2, name: 'AMSA', logo: 'images/empresas/AMSA.png' },
  { id: 3, name: 'USACH', logo: 'images/empresas/USACH.png' },
  { id: 4, name: 'Cartocor', logo: 'images/empresas/Cartocor.webp' },
  { id: 5, name: 'CBRE', logo: 'images/empresas/CBRE.png' },
  { id: 6, name: 'COCH', logo: 'images/empresas/COCH.png' },
  { id: 7, name: 'Coseche', logo: 'images/empresas/Coseche.jpg' },
  { id: 8, name: 'DGAC', logo: 'images/empresas/DGAC.svg' },
  { id: 9, name: 'Duoc', logo: 'images/empresas/Duoc.jpg' },
  { id: 10, name: 'FISCALÍA', logo: 'images/empresas/FISCALÍA.svg' },
  { id: 11, name: 'TecnoFast', logo: 'images/empresas/TecnoFast.jpg' },
  { id: 12, name: 'GIZ', logo: 'images/empresas/GIZ.jpg' },
  { id: 13, name: 'Grupo Coloso', logo: 'images/empresas/COLOSO.png' },
  { id: 14, name: 'Hyundai', logo: 'images/empresas/Hyundai.jpg' },
  { id: 15, name: 'INTERSIDE', logo: 'images/empresas/INTERSIDE.jpg' },
  { id: 16, name: 'Nutrisco', logo: 'images/empresas/Nutrisco.jpg' },
  { id: 17, name: 'Pacal', logo: 'images/empresas/Pacal.png' },
  { id: 18, name: 'Pernod Ricard', logo: 'images/empresas/PR.svg' },
  { id: 19, name: 'Sermecoop', logo: 'images/empresas/Sermecoop.png' },
  { id: 20, name: 'Sodimac', logo: 'images/empresas/Sodimac.jpg' },
  { id: 21, name: 'SURA', logo: 'images/empresas/SURA.jpg' },
  { id: 22, name: 'TNC', logo: 'images/empresas/TNC.png' },
  
  
];
const Nosotros = () => {
  const sliderTrackRef = useRef(null);
  const requestRef = useRef();
  const logoItemsRef = useRef([]);

  useEffect(() => {
    const sliderTrack = sliderTrackRef.current;
    let scrollAmount = 0;
    const scrollSpeed = 1;
    let totalWidth = 0;
    
    // Calcular el ancho total exacto considerando todos los elementos
    if (logoItemsRef.current.length > 0) {
      totalWidth = Array.from(logoItemsRef.current).reduce(
        (total, item) => total + item.offsetWidth,
        0
      ) / 2; // Dividimos por 2 porque duplicamos los logos
    }

    const animate = () => {
      scrollAmount += scrollSpeed;
      
      // Reiniciamos cuando llegamos al final del conjunto original
      if (scrollAmount >= totalWidth) {
        scrollAmount = 0;
        // Reset suave sin saltos
        sliderTrack.style.transition = 'none';
        sliderTrack.style.transform = `translateX(0)`;
        // Forzar reflow para aplicar el cambio sin transición
        void sliderTrack.offsetWidth;
      }
      
      // Aplicamos la transformación con transición suave
      sliderTrack.style.transition = 'transform 0.1s linear';
      sliderTrack.style.transform = `translateX(-${scrollAmount}px)`;
      
      requestRef.current = requestAnimationFrame(animate);
    };

    // Solo iniciar la animación si tenemos logos
    if (totalWidth > 0) {
      requestRef.current = requestAnimationFrame(animate);
    }

    return () => {
      if (requestRef.current) {
        cancelAnimationFrame(requestRef.current);
      }
    };
  }, []);

  // Función para asignar las referencias de los logos
  const addToRefs = (el) => {
    if (el && !logoItemsRef.current.includes(el)) {
      logoItemsRef.current.push(el);
    }
  };

  return (
    <section id="nosotros" className="section">

      <div className="nosotros-header">
        <h2>Sobre Nosotros</h2>
      </div>

       <div className="nosotros-content">
        <div className="intro-section">
          <p className="intro-text">
            <strong>Kctus Gestión SpA</strong> es una empresa chilena fundada el 20 de julio de 2020, 
            nacida como respuesta a la creciente demanda de nuestros clientes por un servicio integral 
            de diseño, fabricación, remodelación y mantenimiento de oficinas en la Región Metropolitana.
          </p>
          
          <p className="intro-text">
            Nos especializamos en el <strong>Estudio, Desarrollo y Ejecución de Proyectos</strong> que abarcan 
            desde la fabricación de mobiliario personalizado hasta la implementación de redes 
            computacionales, electricidad y obras menores, con un enfoque en soluciones integrales 
            para oficinas y espacios de trabajo.
          </p>
        </div>

        <div className="mision-vision">
          <div className="card">
            <h3>Misión</h3>
            <div className="divider-small"></div>
            <p>
              Brindar un servicio integral de mantención y remodelación de oficinas, basado en la 
              honestidad, eficiencia, puntualidad, rapidez y calidad.
            </p>
          </div>
          
          <div className="card">
            <h3>Visión</h3>
            <div className="divider-small"></div>
            <p>
              Ser reconocidos como la mejor opción en mantenimiento y diseño de oficinas, destacando 
              por la confianza y satisfacción de nuestros clientes.
            </p>
          </div>
        </div>

        <div className="proceso-section">
          <h3>Nuestro Proceso de Trabajo</h3>
          <div className="divider"></div>
          
          <div className="proceso-steps">
            <div className="step">
              <div className="step-number">1</div>
              <p>Visitas a terreno</p>
            </div>
            <div className="step">
              <div className="step-number">2</div>
              <p>Análisis de requerimientos</p>
            </div>
            <div className="step">
              <div className="step-number">3</div>
              <p>Levantamiento y elaboración de planos 2D y 3D</p>
            </div>
            <div className="step">
              <div className="step-number">4</div>
              <p>Animación digital y realidad virtual</p>
            </div>
            <div className="step">
              <div className="step-number">5</div>
              <p>Presentación de propuestas de distribución</p>
            </div>
            <div className="step">
              <div className="step-number">6</div>
              <p>Cotización detallada</p>
            </div>
            <div className="step">
              <div className="step-number">7</div>
              <p>Instalación profesional</p>
            </div>
            <div className="step">
              <div className="step-number">8</div>
              <p>Servicio de postventa</p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="clientes-section">
        <h3>Confiaron en nosotros</h3>
        <div className="divider"></div>
        <p className="clientes-subtitle">Estas son algunas de las empresas con las que hemos trabajado</p>
        
        <div className="logos-container">
          <div className="logos-slide" ref={sliderTrackRef}>
            {[...clientLogos, ...clientLogos].map((logo, index) => (
              <div 
                key={`${logo.id}-${index}`} 
                className="logo-item"
                ref={addToRefs}
              >
                <img 
                  src={logo.logo} 
                  alt={logo.name} 
                  title={logo.name}
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

    </section>
  );
};


export default Nosotros;