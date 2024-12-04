import { formatearNumero } from '../utils/formatters';

export default function MostrarResultado({ etiqueta, valor, estado, decimales }) {
  const obtenerColorEstado = () => {
    if (estado === 'exito') return 'text-green-600';
    if (estado === 'error') return 'text-red-600';
    return 'text-gray-900';
  };

  return (
    <div className="mb-4 p-4 bg-white rounded-lg shadow">
      <div className="text-sm text-gray-600">{etiqueta}</div>
      <div className={`text-lg font-semibold ${obtenerColorEstado()}`}>
        {typeof valor === 'number' 
          ? formatearNumero(valor, decimales) 
          : valor}
      </div>
    </div>
  );
}