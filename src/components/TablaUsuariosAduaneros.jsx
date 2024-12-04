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

      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Nombre
              </th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Tipo de Registro
              </th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Código Depósito/Registro
              </th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Seccional
              </th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Código Muisca
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {datosFiltrados.map((item, index) => (
              <tr key={index} className="hover:bg-gray-50">
                <td className="px-4 py-2 text-sm text-gray-900">
                  {item.nombre}
                </td>
                <td className="px-4 py-2 text-sm text-gray-900">
                  {item.tipoRegistro}
                </td>
                <td className="px-4 py-2 text-sm text-gray-900">
                  {item.registro}
                </td>
                <td className="px-4 py-2 text-sm text-gray-900">
                  {item.seccionalAduanas}
                </td>
                <td className="px-4 py-2 text-sm text-gray-900">
                  {item.codigoMuisca}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
} 