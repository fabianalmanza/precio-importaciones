import { useState } from 'react';
import { antidumpingData } from '../data/antidumpingData';
import FiltroSubpartida from './FiltroSubpartida';
import TablaAntidumping from './TablaAntidumping';

export default function ConsultaAntidumping() {
  const [filtro, setFiltro] = useState('');

  const datosFiltrados = antidumpingData.filter(item =>
    item.subpartida.toLowerCase().includes(filtro.toLowerCase())
  );

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Consulta Antidumping</h2>
      <FiltroSubpartida 
        valor={filtro} 
        onChange={setFiltro}
      />
      <TablaAntidumping datos={datosFiltrados} />
    </div>
  );
} 