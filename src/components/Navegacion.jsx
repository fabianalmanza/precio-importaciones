import React from 'react';

export default function Navegacion({ onCambiarVista }) {
  const enlaces = [
    { id: 'calculadora', texto: 'Calculadora' },
    { id: 'antidumping', texto: 'Antidumping' },
    { id: 'arancel', texto: 'Arancel' },
    { id: 'municipios', texto: 'Municipios' },
    { id: 'paises', texto: 'Países' },
    { id: 'usuarios', texto: 'Usuarios Aduaneros' },
    { id: 'anticipadas', texto: 'Anticipadas' }
  ];

  return (
    <nav className="bg-gray-800 rounded-lg mb-6 overflow-x-auto">
      <div className="flex justify-start sm:justify-center">
        {enlaces.map((enlace) => (
          <button
            key={enlace.id}
            onClick={() => onCambiarVista(enlace.id)}
            className="text-gray-300 whitespace-nowrap hover:bg-gray-700 hover:text-white px-3 py-4 text-sm font-medium"
          >
            {enlace.texto}
          </button>
        ))}
      </div>
    </nav>
  );
}