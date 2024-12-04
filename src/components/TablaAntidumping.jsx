export default function TablaAntidumping({ datos }) {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-1/6">
              Subpartida
            </th>
            <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-1/6">
              Valor
            </th>
            <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-1/6">
              País Origen
            </th>
            <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-1/4">
              Decreto/Resolución
            </th>
            <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-1/4">
              Producto
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {datos.map((item, index) => (
            <tr key={index} className="hover:bg-gray-50">
              <td className="px-4 py-2 text-sm text-gray-900 align-top">
                {item.subpartida}
              </td>
              <td className="px-4 py-2 text-sm text-gray-900 whitespace-pre-wrap">
                {item.valor}
              </td>
              <td className="px-4 py-2 text-sm text-gray-900 whitespace-pre-wrap">
                {item.paisOrigen}
              </td>
              <td className="px-4 py-2 text-sm text-gray-900 whitespace-pre-wrap">
                {item.decreto}
              </td>
              <td className="px-4 py-2 text-sm text-gray-900 whitespace-pre-wrap">
                {item.producto}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
} 