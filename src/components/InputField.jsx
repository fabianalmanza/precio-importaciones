import { clsx } from 'clsx';

export default function CampoEntrada({ etiqueta, valor, onChange, tipo = 'number', className = '' }) {
  return (
    <div className={clsx('mb-4', className)}>
      <label className="block text-sm font-medium text-gray-700 mb-1">
        {etiqueta}
      </label>
      <input
        type={tipo}
        value={valor}
        onChange={(e) => onChange(e.target.value)}
        className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
      />
    </div>
  );
}