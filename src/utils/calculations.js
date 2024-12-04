export const calculateFOBUnit = (fobValue, quantity) => {
  if (!fobValue || !quantity) return 0;
  return fobValue / quantity;
};

export const calculatePriceDifference = (referencePrice, fobUnit) => {
  if (!referencePrice || !fobUnit) return 0;
  return referencePrice - fobUnit;
};

export const calculateAdjustmentValue = (difference, quantity) => {
  if (!difference || !quantity) return 0;
  return difference * quantity;
};

export const calculateTariff = (adjustmentValue, tariffPercentage, exchangeRate) => {
  if (!adjustmentValue || !tariffPercentage || !exchangeRate) return 0;
  return adjustmentValue * (tariffPercentage / 100) * exchangeRate;
};

export const calculateIVA = (adjustmentValue, tariff, ivaPercentage, exchangeRate) => {
  if (!adjustmentValue || !tariff || !ivaPercentage || !exchangeRate) return 0;
  return (adjustmentValue * exchangeRate + tariff) * (ivaPercentage / 100);
};

export const calculateTotalAdjustment = (tariff, iva) => {
  if (!tariff || !iva) return 0;
  return tariff + iva;
};