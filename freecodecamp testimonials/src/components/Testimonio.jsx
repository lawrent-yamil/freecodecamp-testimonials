import React from 'react';
import '../styles/Testimonio.css';

const Testimonio = ({ nombre, pais, imagen, cargo, empresa, testimonio }) => {
  return (
    <div className='contenedor-testimonio'>
      <img
        className='imagen-testimonio'
        src={require(`../assets/testimonio-${imagen}.png`)}
        alt={`Imagen de ${nombre}`}
      />
      <div className='contenedor-texto-testimonio'>
        <p className='nombre-testimonio'>
          <strong>{nombre}</strong> en {pais}
        </p>
        <p className='cargo-testimonio'>
          {cargo} en <strong>{empresa}</strong>
        </p>
        <p className='texto-testimonio'>
          "{testimonio}"
        </p>
      </div>
    </div>
  );
}

export default Testimonio;