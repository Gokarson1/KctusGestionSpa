import React from "react";
import './Contacto.css';

const Contacto = () => {
  return (
    <section id="contacto" className="section">
      <h2>Contacto</h2>
      <p>¿Tienes dudas o quieres conversar con nosotros? Escríbenos.</p>
      <form>
        <input type="text" placeholder="Nombre" required />
        <input type="email" placeholder="Correo" required />
        <textarea placeholder="Mensaje" rows="4" required />
        <button type="submit">Enviar</button>
      </form>
    </section>
  );
};

export default Contacto;
