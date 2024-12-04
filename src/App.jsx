import { useState, useEffect } from 'react';
import InputField from './components/InputField';
import ResultDisplay from './components/ResultDisplay';
import {
  calculateFOBUnit,
  calculatePriceDifference,
  calculateAdjustmentValue,
  calculateTariff,
  calculateIVA,
  calculateTotalAdjustment
} from './utils/calculations';

function App() {
  const [values, setValues] = useState({
    fobValue: '',
    quantity: '',
    referencePrice: '',
    tariffPercentage: '',
    exchangeRate: '',
    ivaPercentage: ''
  });

  const [results, setResults] = useState({
    fobUnit: 0,
    difference: 0,
    adjustmentValue: 0,
    tariff: 0,
    iva: 0,
    totalAdjustment: 0
  });

  useEffect(() => {
    const fobUnit = calculateFOBUnit(Number(values.fobValue), Number(values.quantity));
    const difference = calculatePriceDifference(Number(values.referencePrice), fobUnit);
    const adjustmentValue = calculateAdjustmentValue(difference, Number(values.quantity));
    const tariff = calculateTariff(
      adjustmentValue,
      Number(values.tariffPercentage),
      Number(values.exchangeRate)
    );
    const iva = calculateIVA(
      adjustmentValue,
      tariff,
      Number(values.ivaPercentage),
      Number(values.exchangeRate)
    );
    const totalAdjustment = calculateTotalAdjustment(tariff, iva);

    setResults({
      fobUnit,
      difference,
      adjustmentValue,
      tariff,
      iva,
      totalAdjustment
    });
  }, [values]);

  const handleInputChange = (field, value) => {
    setValues(prev => ({
      ...prev,
      [field]: value
    }));
  };

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900">
            Calculadora Precio de Referencia
          </h1>
          <p className="mt-2 text-gray-600">
            Ingrese los valores para calcular los costos de importación
          </p>
        </div>

        <div className="bg-white shadow rounded-lg p-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <InputField
              label="Valor FOB"
              value={values.fobValue}
              onChange={(value) => handleInputChange('fobValue', value)}
            />
            <InputField
              label="Cantidad/Peso Neto"
              value={values.quantity}
              onChange={(value) => handleInputChange('quantity', value)}
            />
            <InputField
              label="Precio de Referencia"
              value={values.referencePrice}
              onChange={(value) => handleInputChange('referencePrice', value)}
            />
            <InputField
              label="Porcentaje de Arancel"
              value={values.tariffPercentage}
              onChange={(value) => handleInputChange('tariffPercentage', value)}
            />
            <InputField
              label="Tasa de Cambio"
              value={values.exchangeRate}
              onChange={(value) => handleInputChange('exchangeRate', value)}
            />
            <InputField
              label="Porcentaje de IVA"
              value={values.ivaPercentage}
              onChange={(value) => handleInputChange('ivaPercentage', value)}
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <ResultDisplay
            label="FOB Unitario"
            value={results.fobUnit}
            decimals={4}
          />
          <ResultDisplay
            label="Estado del Valor"
            value={results.difference <= 0 ? "El valor pagado es correcto" : "Se debe realizar ajuste"}
            status={results.difference <= 0 ? "success" : "error"}
          />
          <ResultDisplay
            label="Valor de Ajuste"
            value={results.adjustmentValue}
          />
          <ResultDisplay
            label="Arancel"
            value={results.tariff}
          />
          <ResultDisplay
            label="IVA"
            value={results.iva}
          />
          <ResultDisplay
            label="Total Ajuste (Arancel + IVA)"
            value={results.totalAdjustment}
          />
        </div>
      </div>
    </div>
  );
}

export default App;