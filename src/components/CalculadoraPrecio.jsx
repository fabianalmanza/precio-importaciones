import { useState, useEffect } from 'react';
import CampoEntrada from './InputField';
import MostrarResultado from './ResultDisplay';
import {
  calcularFOBUnitario,
  calcularDiferenciaPrecio,
  calcularValorAjuste,
  calcularArancel,
  calcularIVA,
  calcularAjusteTotal
} from '../utils/calculations';

export default function CalculadoraPrecio() {
  const [valores, setValores] = useState({
    valorFOB: '',
    cantidad: '',
    precioReferencia: '',
    porcentajeArancel: '',
    tasaCambio: '',
    porcentajeIVA: ''
  });

  const [resultados, setResultados] = useState({
    fobUnitario: 0,
    diferencia: 0,
    valorAjuste: 0,
    arancel: 0,
    iva: 0,
    ajusteTotal: 0
  });

  useEffect(() => {
    const fobUnitario = calcularFOBUnitario(Number(valores.valorFOB), Number(valores.cantidad));
    const diferencia = calcularDiferenciaPrecio(Number(valores.precioReferencia), fobUnitario);
    const valorAjuste = calcularValorAjuste(diferencia, Number(valores.cantidad));
    const arancel = calcularArancel(
      valorAjuste,
      Number(valores.porcentajeArancel),
      Number(valores.tasaCambio)
    );
    const iva = calcularIVA(
      valorAjuste,
      arancel,
      Number(valores.porcentajeIVA),
      Number(valores.tasaCambio)
    );
    const ajusteTotal = calcularAjusteTotal(arancel, iva);

    setResultados({
      fobUnitario,
      diferencia,
      valorAjuste,
      arancel,
      iva,
      ajusteTotal
    });
  }, [valores]);

  const manejarCambioEntrada = (campo, valor) => {
    setValores(previo => ({
      ...previo,
      [campo]: valor
    }));
  };

  return (
    <div>
      <div className="bg-white shadow rounded-lg p-6 mb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <CampoEntrada
            etiqueta="Valor FOB"
            valor={valores.valorFOB}
            onChange={(valor) => manejarCambioEntrada('valorFOB', valor)}
          />
          <CampoEntrada
            etiqueta="Cantidad/Peso Neto"
            valor={valores.cantidad}
            onChange={(valor) => manejarCambioEntrada('cantidad', valor)}
          />
          <CampoEntrada
            etiqueta="Precio de Referencia"
            valor={valores.precioReferencia}
            onChange={(valor) => manejarCambioEntrada('precioReferencia', valor)}
          />
          <CampoEntrada
            etiqueta="Porcentaje de Arancel"
            valor={valores.porcentajeArancel}
            onChange={(valor) => manejarCambioEntrada('porcentajeArancel', valor)}
          />
          <CampoEntrada
            etiqueta="Tasa de Cambio"
            valor={valores.tasaCambio}
            onChange={(valor) => manejarCambioEntrada('tasaCambio', valor)}
          />
          <CampoEntrada
            etiqueta="Porcentaje de IVA"
            valor={valores.porcentajeIVA}
            onChange={(valor) => manejarCambioEntrada('porcentajeIVA', valor)}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <MostrarResultado
          etiqueta="FOB Unitario"
          valor={resultados.fobUnitario}
          decimales={4}
        />
        <MostrarResultado
          etiqueta="Estado del Valor"
          valor={resultados.diferencia <= 0 ? "El valor pagado es correcto" : "Se debe realizar ajuste"}
          estado={resultados.diferencia <= 0 ? "exito" : "error"}
        />
        <MostrarResultado
          etiqueta="Valor de Ajuste"
          valor={resultados.valorAjuste}
        />
        <MostrarResultado
          etiqueta="Arancel"
          valor={resultados.arancel}
        />
        <MostrarResultado
          etiqueta="IVA"
          valor={resultados.iva}
        />
        <MostrarResultado
          etiqueta="Total Ajuste (Arancel + IVA)"
          valor={resultados.ajusteTotal}
        />
      </div>
    </div>
  );
} 