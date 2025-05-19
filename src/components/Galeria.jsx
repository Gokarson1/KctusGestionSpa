import React, { useState, } from 'react';
import './Galeria.css';

const Galeria = () => {
  const [categoriaActiva, setCategoriaActiva] = useState(0);
  const [fotoAmpliada, setFotoAmpliada] = useState(null);

  const categorias = [
  {
    id: 'constructora-ccc',
    nombre: 'Constructora CCC',
    fotos: [
      { id: 1, src: '/images/constructora-ccc/foto (1).jpeg', titulo: 'Sala de ventas 1' },
      { id: 2, src: '/images/constructora-ccc/foto (2).jpeg', titulo: 'Sala de ventas 2' },
      { id: 3, src: '/images/constructora-ccc/foto (3).jpeg', titulo: 'Sala de ventas 3' },
      { id: 4, src: '/images/constructora-ccc/foto (4).jpeg', titulo: 'Sala de ventas 4' },
      { id: 5, src: '/images/constructora-ccc/foto (5).jpeg', titulo: 'Sala de ventas 5' },
      { id: 6, src: '/images/constructora-ccc/foto (6).jpeg', titulo: 'Sala de ventas 6' },
      { id: 7, src: '/images/constructora-ccc/foto (7).jpeg', titulo: 'Sala de ventas 7' }
    ]
  },
  {
    id: 'estaciones-de-trabajo',
    nombre: 'Estaciones de Trabajo',
    fotos: [
      { id: 1, src: '/images/estaciones-de-trabajo/foto (1).jpeg', titulo: 'Estación 1' },
      { id: 2, src: '/images/estaciones-de-trabajo/foto (2).jpeg', titulo: 'Estación 2' },
      { id: 3, src: '/images/estaciones-de-trabajo/foto (3).jpeg', titulo: 'Estación Finning CAT 1' },
      { id: 4, src: '/images/estaciones-de-trabajo/foto (4).jpeg', titulo: 'Estación Finning CAT 2' },
      { id: 5, src: '/images/estaciones-de-trabajo/foto (5).jpeg', titulo: 'Estación COSECHE' },
      { id: 6, src: '/images/estaciones-de-trabajo/foto (6).jpeg', titulo: 'Estación ADT 1' },
      { id: 7, src: '/images/estaciones-de-trabajo/foto (7).jpeg', titulo: 'Estación ADT 1' }
    ]
  },
  {
    id: 'recepcion',
    nombre: 'Recepciones',
    fotos: [
      { id: 1, src: '/images/recepcion/foto (1).jpeg', titulo: 'Recepción 1' },
      { id: 2, src: '/images/recepcion/foto (2).jpeg', titulo: 'Recepción 2' },
      { id: 3, src: '/images/recepcion/foto (3).jpeg', titulo: 'Recepción a pedido 3' },
      { id: 4, src: '/images/recepcion/foto (4).jpeg', titulo: 'Recepción a pedido 4' }
    ]
  },
  {
    id: 'sala-de-espera',
    nombre: 'Salas de Espera',
    fotos: [
      { id: 1, src: '/images/sala-de-espera/foto (1).jpeg', titulo: 'Sala Espera 1' },
      { id: 2, src: '/images/sala-de-espera/foto (2).jpeg', titulo: 'Sala Espera 2' }
    ]
  },
  {
    id: 'sala-de-reunion',
    nombre: 'Salas de Reunión',
    fotos: [
      { id: 1, src: '/images/sala-de-reunion/foto (1).jpeg', titulo: 'Reunión 1' },
      { id: 2, src: '/images/sala-de-reunion/foto (2).jpeg', titulo: 'Reunión 2' },
      { id: 3, src: '/images/sala-de-reunion/foto (3).jpeg', titulo: 'Reunión 3' },
      { id: 4, src: '/images/sala-de-reunion/foto (4).jpeg', titulo: 'Reunión 4' },
      { id: 5, src: '/images/sala-de-reunion/foto (5).jpeg', titulo: 'Reunión Sermecoop 1' },
      { id: 6, src: '/images/sala-de-reunion/foto (6).jpeg', titulo: 'Reunión Sermecoop 2' }
    ]
  },
  {
    id: 'sala-de-ventas-constructora-pacal',
    nombre: 'Sala de Ventas PACAL',
    fotos: [
      { id: 1, src: '/images/sala-de-ventas-constructora-pacal/foto (1).jpeg', titulo: 'Ventas PACAL 1' },
      { id: 2, src: '/images/sala-de-ventas-constructora-pacal/foto (2).jpeg', titulo: 'Ventas PACAL 2' },
      { id: 3, src: '/images/sala-de-ventas-constructora-pacal/foto (3).jpeg', titulo: 'Ventas PACAL 3' },
      { id: 4, src: '/images/sala-de-ventas-constructora-pacal/foto (4).jpeg', titulo: 'Ventas PACAL 4' }
    ]
  },
  {
    id: 'a-pedido',
    nombre: 'Proyectos a Pedido',
    fotos: [
      { id: 1, src: '/images/a-pedido/foto (1).jpeg', titulo: 'Pedido Especial 1' },
      { id: 2, src: '/images/a-pedido/foto (2).jpeg', titulo: 'Pedido Especial 2' },
      { id: 3, src: '/images/a-pedido/foto (3).jpeg', titulo: 'Pedido Especial 3' },
      { id: 4, src: '/images/a-pedido/foto (4).jpeg', titulo: 'Pedido Especial 4' },
      { id: 5, src: '/images/a-pedido/foto (5).jpeg', titulo: 'Pedido Especial 5' }
    ]
  }
];


  return (
    <section id="galeria" className="galeria-container">
      <h2>Galería de Proyectos</h2>
      
      {/* Selector de categorías */}
      <div className="categorias">
        {categorias.map((categoria, index) => (
          <button
            key={categoria.id}
            className={`categoria-btn ${index === categoriaActiva ? 'active' : ''}`}
            onClick={() => setCategoriaActiva(index)}
          >
            {categoria.nombre}
          </button>
        ))}
      </div>
      
      {/* Título dinámico */}
      <h3 className="titulo-categoria">{categorias[categoriaActiva].nombre}</h3>
      
      {/* Contenedor de la galería */}
      <div className="galeria-grid">
  {categorias[categoriaActiva].fotos.map(foto => (
    <div 
      key={foto.id} 
      className="foto-item"
      onClick={() => setFotoAmpliada(foto)}
    >
      <img src={foto.src} alt={foto.titulo} />
      <div className="foto-info">
        <p>{foto.titulo}</p>
      </div>
    </div>
  ))}
</div>
      
      {/* Lightbox para foto ampliada */}
      {fotoAmpliada && (
        <div className="lightbox" onClick={() => setFotoAmpliada(null)}>
          <div className="lightbox-content" onClick={e => e.stopPropagation()}>
            <button className="close-lightbox" onClick={() => setFotoAmpliada(null)}>
              &times;
            </button>
            <img src={fotoAmpliada.src} alt={fotoAmpliada.titulo} />
            <p className="lightbox-titulo">{fotoAmpliada.titulo}</p>
          </div>
        </div>
      )}
    </section>
  );
};

export default Galeria;