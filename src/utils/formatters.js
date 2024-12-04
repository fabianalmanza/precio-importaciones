export const formatearNumero = (numero, decimales = 2) => {
  if (typeof numero !== 'number' || isNaN(numero)) return '0,00';
  
  return new Intl.NumberFormat('es-CO', {
    minimumFractionDigits: decimales,
    maximumFractionDigits: decimales,
  }).format(numero);
};