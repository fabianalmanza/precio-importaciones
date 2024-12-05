import { useState } from 'react';
import { usuariosAduanerosData } from '../data/usuariosAduanerosData';

export default function TablaUsuariosAduaneros() {
  const [filtro, setFiltro] = useState('');

  const datosFiltrados = usuariosAduanerosData.filter(item =>
    item.nombre.toLowerCase().includes(filtro.toLowerCase()) ||
    item.tipoRegistro.toLowerCase().includes(filtro.toLowerCase()) ||
    item.seccionalAduanas.toLowerCase().includes(filtro.toLowerCase()) ||
    (item.registro && item.registro.includes(filtro)) ||
    (item.codigoMuisca && item.codigoMuisca.includes(filtro))
  );

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Depósitos/Usuarios Aduaneros</h2>
      
      <div className="mb-6">
        <input
          type="text"
          placeholder="Buscar por nombre, tipo, registro, seccional o código..."
          value={filtro}
          onChange={(e) => setFiltro(e.target.value)}
          className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        />
      </div>

      <div className="grid grid-cols-5 gap-1">
        {/* Encabezados */}
        <div className="bg-gray-50 px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b-2 border-r border-gray-300 break-words">
          Nombre
        </div>
        <div className="bg-gray-50 px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b-2 border-r border-gray-300 break-words">
          Tipo de Registro
        </div>
        <div className="bg-gray-50 px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b-2 border-r border-gray-300 break-words">
          Código Depósito/Registro
        </div>
        <div className="bg-gray-50 px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b-2 border-r border-gray-300 break-words" style={{ maxWidth: '150px' }}>
          Seccional
        </div>
        <div className="bg-gray-50 px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b-2 break-words">
          Código Muisca
        </div>

        {/* Contenido */}
        {datosFiltrados.map((item, index) => (
          <>
            <div className="px-4 py-2 text-sm text-gray-900 border-b border-r border-gray-200 break-words">
              {item.nombre}
            </div>
            <div className="px-4 py-2 text-sm text-gray-900 border-b border-r border-gray-200 break-words">
              {item.tipoRegistro}
            </div>
            <div className="px-4 py-2 text-sm text-gray-900 border-b border-r border-gray-200 break-words">
              {item.registro}
            </div>
            <div className="px-4 py-2 text-sm text-gray-900 border-b border-r border-gray-200 break-words" style={{ maxWidth: '150px' }}>
              {item.seccionalAduanas}
            </div>
            <div className="px-4 py-2 text-sm text-gray-900 border-b border-gray-200 break-words">
              {item.codigoMuisca}
            </div>
          </>
        ))}
      </div>
    </div>
  );
} 