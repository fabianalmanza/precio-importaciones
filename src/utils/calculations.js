export const calcularFOBUnitario = (valorFOB, cantidad) => {
  if (!valorFOB || !cantidad) return 0;
  return valorFOB / cantidad;
};

export const calcularDiferenciaPrecio = (precioReferencia, fobUnitario) => {
  if (!precioReferencia || !fobUnitario) return 0;
  return precioReferencia - fobUnitario;
};

export const calcularValorAjuste = (diferencia, cantidad) => {
  if (!diferencia || !cantidad) return 0;
  return diferencia * cantidad;
};

export const calcularArancel = (valorAjuste, porcentajeArancel, tasaCambio) => {
  
  return valorAjuste * (porcentajeArancel / 100) * tasaCambio;
};

export const calcularIVA = (valorAjuste, arancel, porcentajeIVA, tasaCambio) => {
  
  return (valorAjuste * tasaCambio + arancel) * (porcentajeIVA / 100);
};

export const calcularAjusteTotal = (arancel, iva) => {
  
  return arancel + iva;
};