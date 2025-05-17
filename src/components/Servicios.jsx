import React from "react";
import './Servicios.css';

const Servicios = () => {
  return (
    <section id="servicios" className="section">
      <h2>Nuestros Servicios</h2>
      
      <div className="servicios-grid">
        {/* Servicio 1 */}
        <div className="servicio-card">
          <img src="images/charla.png" alt="Diseño de mobiliario" className="servicio-imagen" />
          <h3>Asesoría Personalizada</h3>
          <p>Acompañamos a nuestros clientes desde el inicio, evaluando sus necesidades para proponer soluciones funcionales y estéticas, adaptadas a cada espacio.</p>
        </div>
        
        {/* Servicio 2 */}
        <div className="servicio-card">
          <img src="/images/lapiz.png" alt="Paneles acrílicos" className="servicio-imagen" />
          <h3>Diseño Profesional</h3>
          <p>Creamos propuestas visuales y técnicas que combinan creatividad, ergonomía y estilo, asegurando un diseño eficiente y atractivo.</p>
        </div>
        
        {/* Servicio 3 */}
        <div className="servicio-card">
          <img src="/images/gestion-de-proyectos.png" alt="Sistemas de bodegaje" className="servicio-imagen" />
          <h3>Construcción de Proyectos</h3>
          <p> Ejecutamos obras con materiales de alta calidad, cumpliendo con plazos y estándares exigentes para garantizar resultados duraderos.</p>
        </div>
        
        {/* Servicio 4 */}
        <div className="servicio-card">
          <img src="/images/taladro-de-mano.png" alt="Remodelación" className="servicio-imagen" />
          <h3>Fabricación de Mobiliario</h3>
          <p>Producimos muebles a medida para hogares y oficinas, cuidando cada detalle para ofrecer funcionalidad, confort y diseño personalizado.</p>
        </div>
        
        {/* Servicio 5 */}
        <div className="servicio-card">
          <img src="/images/diseno-de-interiores.png" alt="Obras menores" className="servicio-imagen" />
          <h3>Remodelaciones</h3>
          <p>Renovamos y transformamos espacios, integrando nuevas ideas, materiales y distribuciones para mejorar estética y funcionalidad.</p>
        </div>
        {/* Servicio 6 */}
        <div className="servicio-card">
          <img src="/images/gestion-de-proyectos.png" alt="Obras menores" className="servicio-imagen" />
          <h3>Implementación de Soluciones</h3>
          <p>Nos encargamos de instalar e integrar todos los elementos del proyecto para que el resultado sea funcional, eficiente y listo para su uso.</p>
        </div>
        {/* Servicio 7 */}
        <div className="servicio-card">
          <img src="/images/apreton-de-manos.png" alt="Obras menores" className="servicio-imagen" />
          <h3>Servicio Post Venta</h3>
          <p>Ofrecemos acompañamiento después de la entrega del proyecto, asegurando el correcto funcionamiento de cada elemento y atendiendo cualquier necesidad adicional.</p>
        </div>


      </div>
      
      
      {/* Cuadro informativo */}
      <div className="info-box">
        <h3>¿Tienes un proyecto diferente en mente?</h3>
        <p>
          ¡No te preocupes! Cuéntanos tu necesidad y diseñaremos una solución a tu medida.
           <br />
          Trabajamos contigo desde el diseño 
          hasta la implementación final.
        </p>
        <a href="#contacto" className="contact-link">Escríbenos y cuéntanos tu idea.</a>
      </div>
    </section>
  );
};

export default Servicios;