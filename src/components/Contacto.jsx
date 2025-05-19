import React, { useRef, useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp, faFacebook, faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons';
import './Contacto.css';
import emailjs from '@emailjs/browser';

const Contacto = () => {
  const form = useRef();
  const [errors, setErrors] = useState({});
  const [phone, setPhone] = useState('');

  // Función para validar formato de email
  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  // Manejo del cambio en el campo de teléfono
  const handlePhoneChange = (e) => {
    const value = e.target.value.replace(/\D/g, ''); // Solo números
    let formattedValue = '';
    
    if (value.length > 0) {
      formattedValue = `+${value.substring(0, 2)}`; // Código de país
      if (value.length > 2) {
        formattedValue += ` ${value.substring(2, 11)}`; // 9 dígitos máximo
      }
    }
    
    setPhone(formattedValue);
  };

  // Validación del formulario antes de enviar
  const validateForm = () => {
    const newErrors = {};
    const formData = new FormData(form.current);
    
    // Validar email
    if (!validateEmail(formData.get('user_email'))) {
      newErrors.email = 'Ingrese un correo válido';
    }
    
    // Validar teléfono (código de país + 9 dígitos)
    const phoneValue = formData.get('user_phone').replace(/\D/g, '');
    if (phoneValue.length < 11) {
      newErrors.phone = 'Debe incluir código de país (+XX) y 9 dígitos';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const sendEmail = (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    emailjs.sendForm(
      "service_mwryvin", 
      "template_2o6fjc8", 
      form.current, 
      "iqs3mR7DkPJCUdnVq"
    ).then(
      () => {
        alert("¡Mensaje enviado con éxito!");
        form.current.reset();
        setPhone('');
        setErrors({});
      },
      (error) => {
        alert("Error al enviar el mensaje, por favor intente nuevamente", error.text);
      }
    );
  };

  return (
    <section id="contacto" className="section">
      <h2>Contacto</h2>
      <div className="contacto-container">
        {/* Bloque izquierdo */}
        <div className="contacto-info">
          <div className="info-block">
            <h3>¿Tienes un proyecto en mente? ¡Hablemos!</h3>
            <h4 >Agenda tu primera asesoría gratis</h4>
            <p >Creamos entornos que potencian tu productividad y estilo. Nuestro equipo está listo para ayudarte a construir el espacio que necesitas.</p>
          </div>
          
          <div className="redes-sociales">
            <p>Puedes hablarnos por:</p>
            <div className="social-icons">
              <a href="https://wa.me/56990122012" target="_blank" rel="noopener noreferrer" className="social-icon">
                <FontAwesomeIcon icon={faWhatsapp} size="2x" />
              </a>
              <a href="https://www.facebook.com/people/Kctus-Gestión-SpA/100063507849215/" target="_blank" rel="noopener noreferrer" className="social-icon">
                <FontAwesomeIcon icon={faFacebook} size="2x" />
              </a>
              <a href="https://www.instagram.com/kctusgestionspa?igsh=cmQ0ajA2OXE4amJx" target="_blank" rel="noopener noreferrer" className="social-icon">
              <FontAwesomeIcon icon={faInstagram} size="2x" /> 
              </a>
              <a href="https://www.linkedin.com/in/kctus-gestión-spa-5702921b4/?originalSubdomain=cl" target="_blank" rel="noopener noreferrer" className="social-icon">
                <FontAwesomeIcon icon={faLinkedin} size="2x" />
              </a>
            </div>
          </div>
        </div>

        {/* Formulario derecho */}
        <div className="contacto-form">
          <form ref={form} onSubmit={sendEmail}>
            <input 
              type="text" 
              name="user_name" 
              placeholder="Nombre completo" 
              required 
            />
            
            <div className="input-group">
              <input 
                type="email" 
                name="user_email" 
                placeholder="Correo electrónico" 
                required 
              />
              {errors.email && <span className="error">{errors.email}</span>}
            </div>
            
            <div className="input-group">
              <input 
                type="tel" 
                name="user_phone" 
                placeholder="Celular" 
                value={phone}
                onChange={handlePhoneChange}
                required 
              />
              {errors.phone && <span className="error">{errors.phone}</span>}
              <small>Ejemplo: +56 912345678 (Código país + 9 dígitos)</small>
            </div>
            
            <textarea 
              name="message" 
              placeholder="Mensaje" 
              rows="4" 
              required 
            />
            
            <button type="submit">Enviar</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contacto;