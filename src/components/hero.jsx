import React from 'react';
import './hero.css';

const Hero = () => {
  return (
    <section id="inicio" className="hero">
      <div className="hero-content">
        <img
          src="/images/kctusfoto.jpg"  // Asegúrate de colocar la imagen en public/images
          alt="Oficina moderna"
          className="hero-image"
        />
        <h1>Diseñamos y construimos ambientes funcionales de trabajo</h1>
        <h2>Estudio, desarrollo y ejecución de proyectos de interiores a medida</h2>
        {/* <button className="hero-button">Cotizar</button> */}
      </div>
        <a
            href="https://wa.me/56990122012"
            className="whatsapp-float"
            target="_blank"
            rel="noopener noreferrer"
        >
            <img
              src="/images/whatsapp.png" // o usa un ícono de FontAwesome
              alt="WhatsApp"
            />
        </a>

    </section>
  );
};

export default Hero;
