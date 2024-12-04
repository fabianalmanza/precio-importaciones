import { useState } from 'react';

export default function Navegacion({ onCambiarVista }) {
  const [vistaActiva, setVistaActiva] = useState('calculadora');

  const cambiarVista = (vista) => {
    setVistaActiva(vista);
    onCambiarVista(vista);
  };

  return (
    <nav className="bg-white shadow-lg mb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center space-x-4">
          <button
            onClick={() => cambiarVista('calculadora')}
            className={`px-4 py-2 text-sm font-medium ${
              vistaActiva === 'calculadora'
                ? 'text-blue-600 border-b-2 border-blue-600'
                : 'text-gray-500 hover:text-gray-700'
            }`}
          >
            Calculadora de Precio referencia
          </button>
          <button
            onClick={() => cambiarVista('antidumping')}
            className={`px-4 py-2 text-sm font-medium ${
              vistaActiva === 'antidumping'
                ? 'text-blue-600 border-b-2 border-blue-600'
                : 'text-gray-500 hover:text-gray-700'
            }`}
          >
            Consulta Antidumping
          </button>
        </div>
      </div>
    </nav>
  );
} 