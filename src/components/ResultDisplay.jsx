import { formatNumber } from '../utils/formatters';

export default function ResultDisplay({ label, value, status, decimals }) {
  const getStatusColor = () => {
    if (status === 'success') return 'text-green-600';
    if (status === 'error') return 'text-red-600';
    return 'text-gray-900';
  };

  return (
    <div className="mb-4 p-4 bg-white rounded-lg shadow">
      <div className="text-sm text-gray-600">{label}</div>
      <div className={`text-lg font-semibold ${getStatusColor()}`}>
        {typeof value === 'number' 
          ? formatNumber(value, decimals) 
          : value}
      </div>
    </div>
  );
}