import React from 'react';
import './App.css';
import Testimonio from './components/Testimonio';
import db_Empleados from './db/db';

const App = () => {
  return (
    <div className='App'>
      <div className='contenedor-principal'>
        <h1>Esto es lo que dicen nuestros alumnos sobre freeCodeCamp:</h1>
        {db_Empleados.map(empleado => (
          <Testimonio
            key={empleado.nombre}
            nombre={empleado.nombre}
            pais={empleado.pais}
            imagen={empleado.imagen}
            cargo={empleado.cargo}
            empresa={empleado.empresa}
            testimonio={empleado.testimonio}
          />
        ))}
      </div>
    </div>
  );
}

export default App;