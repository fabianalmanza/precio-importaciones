import { useState } from 'react';

export default function Navegacion({ onCambiarVista }) {
  const [vistaActiva, setVistaActiva] = useState('calculadora');

  const cambiarVista = (vista) => {
    setVistaActiva(vista);
    onCambiarVista(vista);
  };

  return (
    <nav className="mb-8">
      <ul className="flex justify-center space-x-4">
        <li>
          <button
            onClick={() => cambiarVista('calculadora')}
            className={`px-4 py-2 text-sm font-medium ${
              vistaActiva === 'calculadora'
                ? 'text-blue-600 border-b-2 border-blue-600'
                : 'text-gray-500 hover:text-gray-700'
            }`}
          >
            Calculadora de Precio
          </button>
        </li>
        <li>
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
        </li>
        <li>
          <button
            onClick={() => cambiarVista('arancel')}
            className={`px-4 py-2 text-sm font-medium ${
              vistaActiva === 'arancel'
                ? 'text-blue-600 border-b-2 border-blue-600'
                : 'text-gray-500 hover:text-gray-700'
            }`}
          >
            Consulta Arancel
          </button>
        </li>
        <li>
          <button
            onClick={() => cambiarVista('municipios')}
            className={`px-4 py-2 text-sm font-medium ${
              vistaActiva === 'municipios'
                ? 'text-blue-600 border-b-2 border-blue-600'
                : 'text-gray-500 hover:text-gray-700'
            }`}
          >
            Códigos Municipios
          </button>
        </li>
        <li>
          <button
            onClick={() => cambiarVista('paises')}
            className={`px-4 py-2 text-sm font-medium ${
              vistaActiva === 'paises'
                ? 'text-blue-600 border-b-2 border-blue-600'
                : 'text-gray-500 hover:text-gray-700'
            }`}
          >
            Códigos Países
          </button>
        </li>
        <li>
          <button
            onClick={() => cambiarVista('usuarios')}
            className={`px-4 py-2 text-sm font-medium ${
              vistaActiva === 'usuarios'
                ? 'text-blue-600 border-b-2 border-blue-600'
                : 'text-gray-500 hover:text-gray-700'
            }`}
          >
            Depósitos/Usuarios Aduaneros
          </button>
        </li>
      </ul>
    </nav>
  );
} 