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
    </section>
  );
};

export default Hero;
