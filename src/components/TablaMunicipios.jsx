import { useState } from 'react';
import { municipiosData } from '../data/municipiosData';

export default function TablaMunicipios() {
  const [filtro, setFiltro] = useState('');

  const datosFiltrados = municipiosData.filter(item =>
    item.municipio.toLowerCase().includes(filtro.toLowerCase()) ||
    item.departamento.toLowerCase().includes(filtro.toLowerCase()) ||
    item.codigo.includes(filtro)
  );

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Códigos de Municipios</h2>
      
      <div className="mb-6">
        <input
          type="text"
          placeholder="Buscar por municipio, departamento o código..."
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
                Código
              </th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Municipio
              </th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Departamento
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {datosFiltrados.map((item, index) => (
              <tr key={index} className="hover:bg-gray-50">
                <td className="px-4 py-2 text-sm text-gray-900">
                  {item.codigo}
                </td>
                <td className="px-4 py-2 text-sm text-gray-900">
                  {item.municipio}
                </td>
                <td className="px-4 py-2 text-sm text-gray-900">
                  {item.departamento}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
} 