export default function FiltroSubpartida({ valor, onChange }) {
  return (
    <div className="mb-6">
      <input
        type="text"
        placeholder="Filtrar por subpartida..."
        value={valor}
        onChange={(e) => onChange(e.target.value)}
        className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
      />
    </div>
  );
} 