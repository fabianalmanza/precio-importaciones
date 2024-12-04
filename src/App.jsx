import { useState } from 'react';
import Navegacion from './components/Navegacion';
import CalculadoraPrecio from './components/CalculadoraPrecio';
import ConsultaAntidumping from './components/ConsultaAntidumping';

function App() {
  const [vistaActual, setVistaActual] = useState('calculadora');

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900">
            Sistema de Importaciones
          </h1>
        </div>

        <Navegacion onCambiarVista={setVistaActual} />

        {vistaActual === 'calculadora' ? (
          <CalculadoraPrecio />
        ) : (
          <ConsultaAntidumping />
        )}
      </div>
    </div>
  );
}

export default App;