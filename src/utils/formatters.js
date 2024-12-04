export const formatNumber = (number, decimals = 2) => {
  if (typeof number !== 'number' || isNaN(number)) return '0.00';
  
  return new Intl.NumberFormat('es-CO', {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  }).format(number);
};